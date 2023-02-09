import NextAuth from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import config from "../../../config";

export default (req, res) => NextAuth(req, res, {
    site: process.env.NEXTAUTH_URL,
    providers: [{
        id: "discord",
        name: "Discord",
        type: "oauth",
        authorization: "https://discord.com/api/oauth2/authorize?scope=identify+guilds+email",
        token: "https://discord.com/api/oauth2/token",
        userinfo: "https://discord.com/api/users/@me",
        profile(profile) {
            if (profile.avatar === null) profile.image_url = `https://cdn.discordapp.com/embed/avatars/${parseInt(profile.discriminator) % 5}.png`
            else profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${profile.avatar.startsWith("a_") ? "gif" : "png"}`

            return {
                id: profile.id,
                name: profile.username,
                discriminator: profile.discriminator,
                email: profile.email,
                image: profile.image_url
            }
        },
        clientId: config.client_ID,
        clientSecret: process.env.SECRET,
    }],
    secret: process.env.SECRET,
    session: { jwt: true, maxAge: 30 * 24 * 60 * 60 },
    jwt: {},
    pages: {},
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.user = account;
                token.accessToken = account.access_token;
                token.refreshToken = account.refresh_token;

               let guilds = await fetch("https://discord.com/api/users/@me/guilds", {
                    headers: { Authorization: "Bearer " + token.accessToken }
                }).then(res => res.json()).catch(err => null);
                if (guilds) token.guilds = guilds.filter(g => (g.permissions_new & 0x20) != 0).map(g => { return { name: g.name, id: g.id, icon: g.icon, owner: g.owner, perms: g.permissions_new } })
            }

            return Promise.resolve(token);
        },
        async session({ session, token, user }) {
            session.accessToken = token.accessToken;
            session.id = token.sub;
            session.guilds = token.guilds ?? [];

            return Promise.resolve(session);
        }
    },
});
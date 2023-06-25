import config from "../../config";

export default async (req, res) => {
    const { code } = req.query;
    if (!code) {
        if (req?.query?.error && req?.query?.error === "access_denied") return res.status(500).send({ status: 500, message: "Access denied while attempting auth with Discord." });
        return res.status(400).send({ status: 400, message: "Required \"code\" value isn't present." })
    }

    const body = new URLSearchParams();
    body.append("client_id", config.client_ID)
    body.append("client_secret", process.env.SECRET)
    body.append("grant_type", "authorization_code")
    body.append("redirect_uri", config.url ?? "https://ch1ll.dev/login")
    body.append("code", code);

    const token = await fetch("https://discordapp.com/api/oauth2/token", {
        method: "POST",
        body,
        headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'Accept': 'application/json' },
    }).then(res => res.json()).catch(() => null);
    if (!token?.access_token) return res.status(500).send({ status: 500, message: "No access token returned from Discord. Please try again later." });

    const profile = await fetch("https://discord.com/api/v9/users/@me", { headers: { 'Authorization': `Bearer ${token.access_token}` } }).then(res => res.json()).catch(() => null);
    if (!profile) return res.status(500).send({ status: 500, message: "No profile returned from Discord. Please try again later." });

    const botGuilds = await fetch(`${config?.apis?.disping}/guild/guilds`, { headers: { 'Authorization': process.env.TOKEN } }).then(res => res.json()).catch(() => null);
    if (!botGuilds) return res.status(500).send({ status: 500, message: "Bot guilds not returned. The bot may be down. Please try again later." });

    const guilds = await fetch("https://discord.com/api/users/@me/guilds", { headers: { 'Authorization': `Bearer ${token.access_token}` } }).then(res => res.json())
        .then(data => data.filter(g => (g.permissions_new & 0x20) != 0).map(g => ({ name: g.name, id: g.id, icon: g.icon, owner: g.owner, perms: g.permissions_new })))
        .catch(() => null);
    if (!guilds) return res.status(500).send({ status: 500, message: "Guilds not returned from Discord. Please try again later." });

    profile.guilds = guilds.map(g => {
        if (botGuilds.some(bg => bg.id === g.id)) g.inServer = true;
        else g.inServer = false;

        return g;
    });

    const newSession = await fetch(`${config?.apis?.disping}/session`, { 
        method: "POST",
        headers: { id: profile.id }
    }).then(data => data.json()).catch(() => null);

    if (newSession?.status !== 200) return res.status(500).send({ token: null, profile: null, customId: null });
    // const guildId = req.query.guild_id;
    // const state = req.query.state;

    // if (guildId) return res.redirect(`/dashboard/${guildId}`);
    // else if (state) res.redirect(state)
    // else res.redirect("/dashboard");

    res.status(200).send({ token: token?.access_token, profile, customId: newSession.data });
}

// // https://discord.com/api/oauth2/authorize?scope=identify+guilds+email",
//         // token: "https://discord.com/api/oauth2/token",
//         // userinfo: "https://discord.com/api/users/@me",
    //     profile(profile) {
    //         if (profile.avatar === null) profile.image_url = `https://cdn.discordapp.com/embed/avatars/${parseInt(profile.discriminator) % 5}.png`
    //         else profile.image_url = `https://cdn.discordapp.com/avatars/${profile.id}/${profile.avatar}.${profile.avatar.startsWith("a_") ? "gif" : "png"}`

    //         return {
    //             id: profile.id,
    //             name: profile.username,
    //             discriminator: profile.discriminator,
    //             email: profile.email,
    //             image: profile.image_url
    //         }
    //     },
    //     clientId: config.client_ID,
    //     clientSecret: process.env.SECRET,
    // }],
//     secret: process.env.SECRET,
//     session: { jwt: true, maxAge: 30 * 24 * 60 * 60 },
//     jwt: {},
//     pages: {},
//     callbacks: {
//         async jwt({ token, account }) {
//             if (account) {
//                 token.user = account;
//                 token.accessToken = account.access_token;
//                 token.refreshToken = account.refresh_token;

//                let guilds = await fetch("https://discord.com/api/users/@me/guilds", {
//                     headers: { Authorization: "Bearer " + token.accessToken }
//                 }).then(res => res.json()).catch(() => null);
//                 if (guilds) token.guilds = guilds.filter(g => (g.permissions_new & 0x20) != 0).map(g => { return { name: g.name, id: g.id, icon: g.icon, owner: g.owner, perms: g.permissions_new } })
//             }

//             return Promise.resolve(token);
//         },
//         async session({ session, token, user }) {
//             session.accessToken = token.accessToken;
//             session.id = token.sub;
//             session.guilds = token.guilds ?? [];

//             return Promise.resolve(session);
//         }
//     },
// });
module.exports = {
  name: "Ch1llDev",
  logo: "/logo.png",
  client_ID: "848685407189336075",
  // url: "http://localhost:3000/login",
  login: "https://discord.com/oauth2/authorize?response_type=code&client_id=848685407189336075&scope=identify%20guilds%20email&redirect_uri={url}&prompt=none",
  apis: {
    main: "https://api.ch1ll.dev",
    disping: "https://api.disping.tk/"
  },
  default: {
    content: {
      youtube: "{role} **{username}** {postTypeWithGrammar} **{title}**\n{link}",
      twitter: "{role} **{username}** just posted a new tweet!\n{link}",
      twitch: "{role} **{username}** just went live!\n{link}",
      reddit: "{role} **{username}** just posted **{title}** in **{subreddit}**\n{link}",
      spotify: "{role} **{username}** just released **{title}** on Spotify!\n{link}"
    }
  },
  invites: {
    disping: "https://discord.com/oauth2/authorize?client_id=1027401268227997778&scope=bot+identify+guilds+email&permissions=274878262336&response_type=code&redirect_uri=https%3A%2F%2Fch1ll.dev%2Fapi%2Fauth%2Fcallback%2Fdiscord",
    sparkv: "https://discord.com/oauth2/authorize?client_id=884525761694933073&scope=bot+applications.commands&permissions=294074575990&response_type=code&redirect_uri=https://www.sparkv.tk/api/callback"
  },
  theme: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  meta: {
    title: "Ch1llDev",
    logo: "/favicon.ico",
    description: "Ch1llDev is a passionate software engineer and website developer, living in the United States.",
    site: "https://ch1ll.dev/",
    siteName: "ch1ll.dev",
    keywords: [
      "Ch1llDev",
      "ch1lldev",
      "dev",
      "KingCh1ll",
      "King",
      "Ch1ll",
      "KingChill",
      "Chill",
      "Discord",
      "Developer",
      "Developer Discord",
      "Discord Developer",
      "Roblox",
      "Roblox Developer",
      "Developer Roblox",
      "SparkV",
      "SparkV Developer",
      "DisPing",
      "DisPing Discord",
      "Discord DisPing",
      "DisPing Developer"
    ]
  },
  navItems: [{
    label: "Home",
    href: "/"
  }, {
    label: "Status",
    href: "/status"
  }, {
    label: "Projects",
    href: "#projects",
    children: [{
      label: "SparkV",
      subLabel: "The ultimate multipurpose bot! (Music/Memes/Utility/Logging/Auto Mod)",
      image: "/images/sparkv.png",
      href: "/sparkv"
    }, {
      label: "DisPing",
      subLabel: "Start integrating your socials to Discord. The easy way. That's DisPing.",
      image: "/images/disping.png",
      href: "/disping"
    }, {
      label: "View More",
      subLabel: "Click here to view more projects.",
      href: "/projects"
    }]
  }, {
    label: "More",
    children: [{
      label: "Docs",
      subLabel: "Need help with Ch1llDev's services? Checkout the docs!",
      href: "https://docs.ch1ll.dev/"
    }, {
      label: "Community & Support",
      subLabel: "Join Ch1llDev's Discord server.",
      href: "/discord"
    }, {
      label: "Terms Of Service",
      subLabel: "Learn about what you can and can't do with Ch1llDev's services.",
      href: "/tos"
    }, {
      label: "Privacy Policy",
      subLabel: "Learn about how we use your data, and how we keep it safe.",
      href: "/privacy"
    }]
  }],
  projects: [{
    name: "Ch1ll.dev",
    image: "/images/users/ch1lldev.png",
    banner: "/images/ch1ll_site.png",
    showcase: true,
    description: "A website made to showoff Ch1llDev's many creations, which happens to be this website!",
    link: "https://ch1ll.dev",
    linkName: "ch1ll.dev",
    tags: [{
      color: "green",
      label: "Website"
    }, {
      color: "teal",
      label: "NextJs"
    }]
  }, {
    name: "DisPing",
    image: "/images/disping.png",
    banner: "/images/disping_site.png",
    description: "Start integrating your socials to Discord. The easy way. That's DisPing.",
    link: "/disping",
    linkName: "disping.tk",
    bot: true,
    tags: [{
      color: "blue",
      label: "Discord Bot"
    }, {
      color: "teal",
      label: "TypeScript"
    }]
  }, {
    name: "SparkV",
    image: "/images/sparkv.png",
    thumbnail: "/images/sites/sparkv.png",
    description: "The ultimate multipurpose bot! (Music/Memes/Utility/Logging/Auto Mod)",
    link: "/sparkv/",
    linkName: "sparkv.tk",
    bot: true,
    tags: [{
      color: "blue",
      label: "Discord Bot"
    }, {
      color: "teal",
      label: "TypeScript"
    }, {
      color: "teal",
      label: "NextJs"
    }]
  }, {
    name: "Freeze Tag Escape",
    image: "/images/default/robloxplace.png",
    description: "Freeze Tag Escape is a new escape/freeze tag {roblox}. Escape the many different maps without getting frozen by the tagger!",
    link: "https://roblox.com/games/8481818550/WIP-Freeze-Tag-Escape",
    linkName: "roblox.com",
    tags: [{
      color: "red",
      label: "Roblox Game"
    }, {
      color: "blue",
      label: "Lua"
    }]
  }, {
    name: "[DEMO] Roblox Videos Theater",
    image: "/images/default/robloxplace.png",
    description: "Choose from huge selection of Cartoony Videos, Funny Shorts, and more in Roblox's Best Videos Theater. This game was made in a single day to show off Roblox's new videos.",
    link: "https://roblox.com/games/5748202585/ROBLOX-Videos-Theater",
    linkName: "roblox.com",
    tags: [{
      color: "red",
      label: "Roblox Game"
    }, {
      color: "blue",
      label: "Lua"
    }]
  }, {
    name: "[DEMO] Ch1ll Defense",
    image: "/images/default/robloxplace.png",
    description: "A tower defense game where you have to protect the remaining citizens of Robloxia, an island out in the middle of nowhere.",
    link: "https://roblox.com/games/6855205942/DEMO-Ch1ll-Defense",
    linkName: "roblox.com",
    tags: [{
      color: "red",
      label: "Roblox Game"
    }, {
      color: "blue",
      label: "Lua"
    }]
  }, {
    name: "[DEMO] Monkemania",
    image: "/images/default/robloxplace.png",
    description: "Welcome to Monke Mania! Here, your fellow monkes are looking for bananas, and monkeing around while at it.",
    link: "https://roblox.com/games/7979592420/Monkemania",
    linkName: "roblox.com",
    tags: [{
      color: "red",
      label: "Roblox Game"
    }, {
      color: "blue",
      label: "Lua"
    }]
  }]
}

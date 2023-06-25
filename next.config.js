module.exports = {
  experimental: {
    appDir: true
  },
  images: {
    domains: [
      "tr.rbxcdn.com",
      "t1.rbxcdn.com",
      "cdn.discordapp.com",
      "http.cat"
    ]
  },
  async redirects() {
    return [{
      source: "/discord",
      destination: "https://discord.gg/PPtzT8Mu3h",
      permanent: true
    }]
  }
}

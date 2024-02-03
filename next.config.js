module.exports = {
  output: "standalone",
  images: { domains: ["http.cat"] },
  async redirects() {
    return [{
      source: "/discord",
      destination: "https://discord.gg/PPtzT8Mu3h",
      permanent: true
    }, {
      source: "/disping",
      destination: "https://disping.xyz",
      permanent: true
    }, {
      source: "/sparkv",
      destination: "https://sparkv.tk/",
      permanent: true
    }]
  }
}

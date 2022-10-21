const PROXY_CONFIG = [
  {
    context: [
      "/employee",
    ],
    target: "https://localhost:7168",
    secure: false
  }
]

module.exports = PROXY_CONFIG;

module.exports = {
  siteMetadata: {
    title: `Virtual Democracies`,
    description: `Self-Powered Users`,
    author: `@Vidas`,
    keywords: "freedom, security, virtual democracies, cashless, democracie, innovation, tech, mobile payment, android, apps, microapplication, ios, iphone, google, apple, monitoring capitalism, e2ee, end-to-end, cryptography, shopping, stores"
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `v5j72rq1pnzq`,
        accessToken: `a9BgQTnR4sFwXbLtqVY0EHQ8MgREhDlGH9_EP9pQGlw`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

module.exports = {
  siteMetadata: {
    title: `Manni Striffolino`,
    description: `Manni Striffolino is an illustrator and graphic designer based out of Los Angeles, California open to commissioned pieces and collaborative work.`,
    author: `@lorenzolevy`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `Manni Striffolino`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#35B1C9`,
        theme_color: `#35B1C9`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-styled-components`,
  ],
}

import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: ``,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [`gatsby-plugin-sass`,
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-plugin-google-fonts`,
    options: {
      fonts: [
        `work sans`
      ],
      display: 'swap'
    }
  }
],
};

export default config;

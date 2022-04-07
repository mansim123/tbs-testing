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
    resolve: `gatsby-plugin-google-fonts-v2`,
    options: {
      fonts: [
        {
          family: 'Work Sans',
          weights: ['400', '700', '800', '900']
        }
      ]
    }
  }
],
};

export default config;

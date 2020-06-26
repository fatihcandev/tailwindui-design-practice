module.exports = {
  siteMetadata: {
    title: 'Tailwind UI Components Design Practice',
    description:
      'This is a portfolio website that contains components from Tailwind UI that has been created in order to practice my front-end skills.',
    url: 'https://tailwindui-design-practice.vercel.app/',
    image: './src/images/meta-image.jpg',
    twitterUsername: '@fatihcandev'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
}

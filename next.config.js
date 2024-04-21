// // Import any necessary Next.js utilities or plugins
// const withPlugins = require('next-compose-plugins');
// const withCSS = require('@zeit/next-css');

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,

//   // Setting up custom headers for your application
//   async headers() {
//     return [
//       {
//         source: "/api/weather",
//         headers: [
//           { key: "Access-Control-Allow-Credentials", value: "true" },
//           {
//             key: "Access-Control-Allow-Origin",
//             value: "https://simpleweather-one.vercel.app",
//           },
//           {
//             key: "Access-Control-Allow-Methods",
//             value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
//           },
//           {
//             key: "Access-Control-Allow-Headers",
//             value:
//               "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
//           },
//         ],
//       },
//     ];
//   },

//   // Configure webpack to handle CSS imported from node_modules
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       // Fixes npm packages that depend on `fs` module
//       config.node = {
//         fs: 'empty'
//       }
//     }

//     return config;
//   },

//   // Ensures that image optimization works across different hosts (useful if you're fetching images from external URLs)
//   images: {
//     domains: ['https://simpleweather-one.vercel.app'], // Add your domains here
//   },
// };

// // Export the configuration extended with plugins
// module.exports = withPlugins([
//   [withCSS],
// ], nextConfig);
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/weather",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "https://simpleweather-one.vercel.app",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
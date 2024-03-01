/** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: false,
//   },
// };

// module.exports = nextConfig;

const webpack = require('webpack');

const nextConfig = {
  experimental: {
    appDir: false,
  },
  // webpack: (config, { isServer }) => {
  //   // Add the ProvidePlugin only in the client-side build
  //   if (!isServer) {
  //     config.plugins.push(
  //       new webpack.ProvidePlugin({
  //         $: 'jquery',
  //         jQuery: 'jquery',
  //         'window.jQuery': 'jquery'
  //       })
  //     );
  //   }

  //   return config;
  // }, 
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
],
};

module.exports = nextConfig;



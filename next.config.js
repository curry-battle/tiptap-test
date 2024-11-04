/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // for use SVG
  // see: https://logsuke.com/web/programming/react/next-svg-icon
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
};

module.exports = nextConfig;

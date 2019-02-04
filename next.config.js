require('dotenv').config();
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push(
      {
        test: /\.less$/,
        use: [
          {
            loader: (!isServer && dev) ? 'style-loader' : MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true
            }
          }
        ]
      },
    );

    config.plugins = config.plugins || [];

    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: '[name].css',
      })
    );

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];

    return config
  }
};

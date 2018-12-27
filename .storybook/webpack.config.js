const path = require('path');
const STORYBOOK_PACKAGE_NAME = process.env.STORYBOOK_PACKAGE_NAME
console.log('STORYBOOK_PACKAGE_NAME', STORYBOOK_PACKAGE_NAME)

module.exports = {
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [
          {
            loader: 'markdown-loader',
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: { importLoaders: 2 },
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     plugins: () => [
          //       require('autoprefixer')({
          //         browsers: ['last 1 version', 'ie >= 11'],
          //       }),
          //     ],
          //   },
          // },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, '..', 'node_modules')],
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        include: path.resolve(__dirname, '../packages/'),
        loader: 'awesome-typescript-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  }
};

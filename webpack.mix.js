let mix = require('laravel-mix');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

mix.disableNotifications();

if (mix.inProduction()) {
  /*mix.webpackConfig({
    devtool: 'source-map'
  })
    .sourceMaps()*/
}

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

mix
  .setResourceRoot('/public/')
  .setPublicPath(path.normalize('public/'))
  .js('resources/js/app.js', 'js')
  .sass('resources/sass/app.scss', 'css')
  .version();

mix.webpackConfig({
  optimization: {
    minimizer: mix.inProduction() ? [new UglifyJsPlugin()] : [],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  module: {
    rules: [
      {
        test: /\.font\.js/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          'css-loader',
          'webfonts-loader'
        ]
      },
    ]
  }
});

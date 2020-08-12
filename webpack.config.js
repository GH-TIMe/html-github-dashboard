const path = require('path');
const miniCss = require('mini-css-extract-plugin');
module.exports = {
   entry: './src/index.js',
   output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
   },
   module: {
      rules: [{
         test:/\.(s*)css$/,
         use: [
            miniCss.loader,
            'css-loader',
            'sass-loader',
         ]
      },
      {
         test: /\.(eot|svg|ttf|woff|woff2)$/,
         use: [
            {
               loader: 'file-loader?name=./src/scss/fonts/[name].[ext]'
            }
         ]
     }]
   },
   plugins: [
      new miniCss({
         filename: 'style.css',
      }),
   ]
};
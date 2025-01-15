const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point for your React app
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Resolving file extensions
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Using Babel to transpile JavaScript files
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader'], // If you're using HTML files, load them
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    hot: true,
  },
  plugins: [
    // Add any necessary plugins here (e.g., HTMLWebpackPlugin)
  ],
};

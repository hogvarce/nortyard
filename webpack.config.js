module.exports = {
  entry: [
    './src/index.js',
    './src/controllers/personController.js',
    './src/controllers/userController.js',
    './src/controllers/positionController.js',
    './src/controllers/departmentController.js',
    './src/controllers/companyController.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};

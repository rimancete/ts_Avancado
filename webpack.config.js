import path from 'path';

module.exports = {
  // enquanto em dev
  mode: 'development',
  entry: './src/A0027-static/A0027-static.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.frontend.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  // marcar no ts o item debugado no navegador
  devtool: 'source-map',
};

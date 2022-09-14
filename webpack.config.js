// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  // enquanto em dev
  mode: 'development',
  entry: './src/A0047-generics-5/A0047-generics-5.ts',
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

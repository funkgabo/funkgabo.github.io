const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = (env, argv) => {
    const { mode } = argv
    const isProduction = mode === 'production'
    return {
        output: {
            filename: isProduction ? '[name].[contenthash].js' : 'main.js',
            path: path.resolve(__dirname,'build'),
            publicPath: '/'
        },
        module: {
            rules: [
                {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                  }
                }
              ]
        },
        plugins: [new HtmlWebpackPlugin({ template: 'src/index.html' })],
        devServer: {
            open: true,
            port:3000,
            compress: true,
            historyApiFallback: true
        },
        devtool: "source-map",
        stats: {
          children: true,
      },
    }
}

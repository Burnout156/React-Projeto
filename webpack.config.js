const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = 
{
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    },

    resolve: 
    {
        extensions: ['.js', '.jsx']
    },

    module: 
    {
        rules:
        [
            {
                test: /\.(js|jsx|css)?$/, 
                exclude: /node_modules/,
                loader: "babel-loader", 
            
                
                options: 
                {
                    presets: 
                    [
                      '@babel/preset-env',
                      "@babel/preset-react",

                       {
                            plugins: 
                            [
                                '@babel/plugin-proposal-class-properties',
                                '@babel/plugin-syntax-jsx'
                            ]
                       }
                
                    ]
                }
            }
        ]
    },

    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
        ],
    },

    module: {
        rules: [{ test: /\.txt$/, use: 'raw-loader' }]
      },
      plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })],

      module: {
        rules: [
          {
            test: /\.html$/i,
            loader: 'html-loader',
          },
        ],
      },

      module: {
        rules: [
            {
              test: /\.js?$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {

                }
              },
           }, { // HERE
              test: /\.scss$/,
              use: {
                loader: 'style!css!resolve-url!sass?sourceMap'
              }
            }
          ]
      }

};
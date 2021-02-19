const path = require('path');


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundler.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                
                options: 
                {
                    presets: 
                    [
                      '@babel/preset-env',
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
    }

};
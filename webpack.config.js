const path = require('path');
const { resolve } = require('path');

module.exports = {
    entry: './app/main.js', 
    mode: 'development', 
    output: {
        /*__dirname is a Node variable that, when used outside of webpack, 
        returns the directory name of the current module. 
        with webpack, it returns '/' instead. 
        to make __dirname behave the same as it does outside webpack, 
        wrap it in path.join()
        this assumes that bundle.js file will be in the same directory as index.html */
        path: __dirname, 
        filename: './public/bundle.js'
    },
    context: __dirname, 
    devtool: 'source-maps',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }, 
            {
                test: /\.css$/, 
                use: [ "style-loader", "css-loader"]
            }
        ]
    }
}
/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-04-11 00:51:46
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-11 01:01:54
 */
'use strict';

const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
    },
    devtool: 'source-map',
    plugins: [
    ]
};

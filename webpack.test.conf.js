/*
 * @Description: 
 * @version: 
 * @Author: lxw
 * @Date: 2020-04-11 00:51:46
 * @LastEditors: lxw
 * @LastEditTime: 2020-04-11 16:35:55
 */
'use strict';

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './karma-index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'test-build'),
        filename: 'bundle.js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ]
                        }
                    }
                ]
            },
            // 用 Istanbul 只监测业务代码,include是你需要测试的源码，通过它以及你最终测试脚本统计代码覆盖率
            {
                test: /\.js$|\.jsx$/,
                use: {
                    loader: 'istanbul-instrumenter-loader',
                    options: { esModules: true } // 使其支持es2015 的mudule语法
                },
                enforce: 'post', // 使用babel，You must run the instrumentation as a post step
                exclude: /node_modules|\.spec\.js$/,
                include: path.resolve('src/libs')
            }
        ]
    },
    resolve: {
    },
    devtool: 'inline-source-map',
    plugins: [
    ]
};

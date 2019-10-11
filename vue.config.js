const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const cesiumSource = './node_modules/cesium/Source'
const cesiumWorkers = '../Build/Cesium/Workers'

module.exports = {
    devServer: {
        port: 8787,
    },
    css: {
        loaderOptions: {
          less: {
            javascriptEnabled: true
          }
        },
    },
    configureWebpack: config => {
        const base = {
            output: {
                sourcePrefix: ' '
            },
            amd: {
                toUrlUndefined: true
            },
            resolve: {
                alias: {
                    'vue$': 'vue/dist/vue.esm.js',
                    '@': path.resolve('./src'),
                    'cesium': path.resolve(__dirname, cesiumSource),
                    '@com': path.resolve('./src/components')
                }
            },
            plugins: [
                new CopyWebpackPlugin([{ from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' }]),
                new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Assets'), to: 'Assets' }]),
                new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' }]),
                new CopyWebpackPlugin([{ from: path.join(cesiumSource, 'ThirdParty/Workers'), to: 'ThirdParty/Workers' }]),
                new webpack.DefinePlugin({
                    CESIUM_BASE_URL: JSON.stringify('./')
                })
            ],
            module: {
                unknownContextRegExp: /^.\/.*$/,
                unknownContextCritical: false,
                rules: [
                    { test: /\.map$/, use: 'json-loader'}
                ]
            }
        }
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
        } else {
            // 为开发环境修改配置...
        }
        return base;
    },
    assetsDir: 'static'
}
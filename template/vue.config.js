const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [resolve('src/less/var.less')]
        }
    },

    devServer: {
        historyApiFallback: true,
    },

    chainWebpack(config) {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('apis', resolve('src/services/index.js'))
    },

    lintOnSave: false
}

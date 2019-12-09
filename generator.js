module.exports = api => {
    api.render('./template')
    api.extendPackage({
        "dependencies": {
            "axios": "^0.19.0",
        },
        "devDependencies": {
            "style-resources-loader": "^1.3.2",
            "vue-cli-plugin-style-resources-loader": "^0.1.4",
          },
    })
}
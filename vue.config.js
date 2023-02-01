module.exports = {
    devServer: {
        // This will forward any request that does not match a static file to localhost:3000
        proxy: 'file:///Users/aolin/webdev/vue-1'
    }
}
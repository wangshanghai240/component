let path = require('path')
// const { config } = require('vue/types/umd')
function resolve(dir){
    return path.join(__dirname,dir)
}
module.exports = {
    // 路径别名配置
    chainWebpack:(config)=>{
        config.resolve.alias
            .set('@',resolve('src'))
            .set('components',resolve('src/components'))
            .set('views',resolve('src/views'))
            .set('network',resolve('src/network'))
            .set('assets',resolve('src/assets'))
    },

}
const path = require('path')

module.exports = {
    devServer:{
        proxy:{
            'api':{
                target:'http://mall-pre.springboot.cn',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    },
    chainWebpack:(config)=>{
        config.resolve.alias //通过resolve.alias.set设置
            .set('components', path.join(__dirname, 'src/components'))
            .set('pages',path.join(__dirname,'src/pages'))
            .set('storage',path.join(__dirname,'src/storage'))
            .set('resource',path.join(__dirname,'resource'))
    }
}
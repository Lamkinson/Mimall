const path = require('path')

module.exports = {
    devServer:{
        proxy:{
            'api':{
                target:'https://',
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
    }
}
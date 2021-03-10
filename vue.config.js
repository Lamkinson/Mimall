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
    }
}
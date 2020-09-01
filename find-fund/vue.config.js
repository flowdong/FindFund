module.exports={
    lintOnSave:false,//关闭eslint
    devServer:{
        proxy:{
            '/api':{
                target: 'https://way.jd.com/',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            },

        }
    }
}

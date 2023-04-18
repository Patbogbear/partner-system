const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const debug = process.env.NODE_ENV !== 'production'


module.exports = defineConfig({
  publicPath:'/',
  outputDir:'dist',
  assetsDir:'assets',
  lintOnSave:false,
  runtimeCompiler:true,
  transpileDependencies: [],
  productionSourceMap: true,
  // configureWebpack: config => {
  //   if(debug) {
  //     //dev env config
  //     config.devtool = 'cheap-module-eval-source-map';
  //   }else{
  //     //pro env config
  //   }
  //   // Object.assign(config,{
  //   //   resolve:{
  //   //     alias:{
  //   //       '@':path.resolve(__dirname,'./src'),
  //   //       '@c':path.resolve(__dirname,'./src/components'),
  //   //       'vue$':'vue/dist/vue.esm.js'
  //   //     }
  //   //   }
  //   // })
  // },
  chainWebpack: config => {
    if(debug){
      // local dev config
    }else{
      //pro env config
    }
  },
  parallel:require('os').cpus().length >1,
  pluginOptions:{
    //third party plugin
  },
  pwa:{

  },
  devServer:{
    open:true,
    host:'localhost',
    port:8080,
    https:false,
    //hotOnly:false,
    proxy:{
        //
        '/api':{
          target:'http://localhost:5000/api',
          ws:true,
          changOrigin:true,
          pathRewrite:{
            '^/api':''
          }
        }
      
      
    },
   //before: app =>{}
  }


})

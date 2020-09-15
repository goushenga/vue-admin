const path = require("path");
const resolve = function(dir) {
  return path.join(__dirname, dir);
};
module.exports = {
  /* 部署生产环境和开发环境下的URL：可对当前环境进行区分，baseUrl 从 Vue CLI 3.3 起已弃用，要使用publicPath */
  publicPath: process.env.NODE_ENV === "production" ? "" : "",
  /* 输出文件目录：在npm run build时，生成文件的目录名称 */
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devdlit",
  /* 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录 */
  assetsDir: "static",

  lintOnSave: false, // 是否开启eslint保存检测
  productionSourceMap: false, // 是否在构建生产包时生成sourcdeMap

  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@v", resolve("src/views"))
      .set("@c", resolve("src/components"))
      .set("@u", resolve("src/utils"))
      .set("@s", resolve("src/service")); /* 别名配置 */
    config.optimization.runtimeChunk("single");
  },
  /* webpack-dev-server 相关配置 */
  devServer: {
    // host: "localhost",
    /* 本地ip地址 */
    //host: "192.168.1.107",
    host: "0.0.0.0", //局域网和本地访问
    port: "8080",
    hot: true,
    /* 自动打开浏览器 */
    open: false,
    overlay: {
      warning: false,
      error: true
    },
    /* 跨域代理 */
    proxy: {
      "/api": {
        /* 目标代理服务器地址 */
        target: "http://m260048y71.zicp.vip", //
        // target: "http://192.168.1.102:8888", //
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  },
  // 配置全局的样式
  css: {
    // css预设配置项
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启css source maps？
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {
      sass: {
        // 主文件的入口
        prependData: `@import "./src/styles/main.scss";`
        // prependData:`@import "./src/styles/main.scss";`
      }
    }
  }
};

const baseWebpackConfig = require('./webpack.base.config.js');

const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");


module.exports = merge(baseWebpackConfig, {
  devServer: {//通过来自「webpack-dev-server」的这些选项，能够通过多种方式改变其行为。
    contentBase: path.join(__dirname, 'dist'),// 告诉服务器从哪来提供内容。只有在你想要提供静态文件时才需要。
    publicPath: '/',//用于确定从哪里提供bundle，并且此选项优先
    compress: true,//一切服务都启用「gzip」压缩
    host: "localhost",
    port: 9000,//指定监听的端口号
    //quiet:true,//除了初始化启动信息之外的任何内容都不会被打印到控制台。这也就意味着来自webpack的错误或警告在控制台不可见
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",//jquery
      jQuery: "jquery",
      "window.jQuery": "jquery",
      _: "lodash"//lodash
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
});
module.exports = {
  mode: 'development'
};


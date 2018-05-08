## 添加外部服务器可以访问

### 优化需求

在进行团队的开发的环节，在完成前端任务的时候，需要将ui设计的内容发给设计师，产品经理，以讨论是否符合需求。如果是在自己的localhost上面预览，然后将ta们到自己的电脑这里来讨论的话，工作的效率就会打折等等。这就要求要在公司的局域网上面可以进行进行预览了。


### 优化方案

怎么做到在服务的服务器预览前端开发好的内容呢？

根据我搭建的项目，需要在`..／build/webpack.config.dev.js`中进行更改。在`devServer`字段中，有这么一个字段`host`，当host字段值不填或者填`0.0.0.0`的时候，可以在本机浏览器上通过`localhost:9000或者0.0.0.0:9000`浏览开发的文件，而在其他的机子的浏览器上面是无法查看的。这就要将`host`的值设为本机的ip地址，我的机子的ip地址为`172.16.1.91`。设置完，重新运行`npm run dev`就可以在本机和其他连着同一个局域网的浏览器上面通过`http://172.16.1.91:9000/ 或者172.16.1.91:9000`进行查看。

详情见参考--[devServer.host](https://doc.webpack-china.org/configuration/dev-server/#devserver-host-cli-)
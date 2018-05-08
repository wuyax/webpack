module.exports = {
  // 停止在父级目录中寻找配置
  root: true,

  //解析器 default espree
  "parser": "babel-eslint",

  // 解析器配置选项
  "parserOptions": {
    "sourceType": "module"
  },

  // 指定启用的环境 设置为true
  "env": {
    "browser": true,
    "node": true,
    "commonjs": true,
    "es6": true, //至此es6语法检查
  },

  //表示使用默认的规则进行校验 后面的"rules" 则是对已有规则的覆盖或者扩展
  "extends": "eslint:recommended",
  //"extends":"standard",


  "plugins": [
    "html",//检查.html中的javascript中的语法错误，执行npm run link就行

    //The eslint-plugin- prefix can be omitted from the plugin name.
    "standard",
    "promise"
  ],

  //规则有3个等级：off（0）、warn（1）和error（2）。off表示禁用这条规则，warn表示给出警告，并不会导致检查不通过，而error则会导师检查不通过
  "rules": {
    "indent": [//缩进
        "error",//可以用2代替error
        2 // {4}数字代表空格数 ,{tab} 关键字
    ],
    // "linebreak-style": [
    //     "error",
    //     "unix"//如果是在window平台上开发的话，就要改成""windows"
    // ],
    "quotes": [//字符串的引用使用双引号
      "warn",
      "single" // double
    ],
    "semi": [//检查分号semicolons
      "error",
      "always"
    ],
    "no-console": "off"//不检查console.log的语法，忽略它
  },
  "globals": {//声明在代码中自定义的全局变量
    "document": true,
    "navigator": true,
    "window": true,
    "_": true,//检查lodash的语法，否则会产生 '_'is no-undef
    "$": true,////添加支持jquery语法检查，不然会出现 '$'is no-undef,这也可以在env中添加“jquery:true”解决
  }
};

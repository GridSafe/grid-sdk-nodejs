# 格安nodejs SDK

为了让广大用户能更好地使用速致的产品，我们开发了相应的SDK开发包。

有需要的用户可以下载对应语言版本的开发包进行使用。

SDK开发包主要实现了速致提供的api的简单调用。

现提供PHP、Python、Nodejs、Java等的SDK开发包。

其他语言版本的正在开发中。

要了解速致的产品信息，请查看官方网站。

速致官网：https://www.cdnzz.com

api文档地址：https://www.cdnzz.com/help/user_api

## Usage

1. 修改./src/config.js 文件

   - 修改USER_NAME 和 USER_SIGNATURE
   - 在[账户页面](https://www.cdnzz.com/account) 可以看到你的接口标识(signature), USER_NAME 则是你的电邮地址

2. 加入需要的模块

  ```
  var sdk = require('./grid-sdk-nodejs/src/grid_sdk')
  ```

3. 调用相应的操作

  ```
  sdk.purgeCache("http://www.duozt.com/public/js/jquery.min.js")
  sdk.preload("http://www.duozt.com/public/js/jquery.min.js")
  ```

## Requirements

  ```
  npm install request
  ```

## Change Log

Please see 'CHANGE_LOG.md'




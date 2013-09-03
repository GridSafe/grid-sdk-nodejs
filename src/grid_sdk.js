/**
 * author: lycheng
 * email: cheng@grid-safe.com
 * grid nodejs sdk
 */

var config = require('./config')

var request = require('request');

var apiUrl = 'https://www.cdnzz.com/api/json'


/**
 * 清缓存
 *
 * @param url: 需要清缓存的url
 *
 * @return boolean
 */
function purgeCache(url) {
  return post(url, "PurgeCache");
}

/**
 * 预加载
 *
 * @param url: 需要进行预加载的url
 *
 * @return boolean
 */
function preload(url) {
  return post(url, "AddPreload");
}

/**
 * 进行POST 请求
 *
 * @param url: 进行请求的URL
 * @param method: 请求的具体操作 清缓存还是预加载
 *
 * @return boolean
 */
function post(url, method) {
  if (false == validUrl(url)) {
    return false
  }

  var postData = {
    user: config.USER_NAME,
    signature: config.USER_SIGNATURE,
    method: method,
    url: url
  }

  request.post({
    uri: apiUrl,
    form: postData
  }, function(err, res, body){

    var result = JSON.parse(body);
    if (200 == res.statusCode) {

      console.log(result.msg);
      if (result['result'] != 'error') {
        return true;
      }
    } else {
      console.log("Network Error");
    }
    return false;
  });
}

/**
 * 测试一个URL 是否合法
 *
 * @param url: 需要进行预加载的url
 *
 * @return boolean
 */
function validUrl(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
                           '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
                           '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
                           '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
                           '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
                           '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  if(!pattern.test(str)) {
    console.log("Invalid url")
    return false;
  } else {
    return true;
  }
}

exports.purgeCache = purgeCache;
exports.preload = preload;

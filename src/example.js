/**
 * author: lycheng
 * email: cheng@grid-safe.com
 * grid nodejs sdk example
 */

var sdk = require('./grid_sdk')

sdk.purgeCache("http://www.duozt.com/public/js/jquery.min.js")
sdk.preload("http://www.duozt.com/public/js/jquery.min.js")

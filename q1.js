let  DNS = require('dns');
DNS.lookup('www.miu.edu', function (err, ip, family) {
  console.log(ip);
});
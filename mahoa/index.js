var crypto =  require ("crypto-js");
var data ="bui van nam";
for (var i=0 ; i<10000;i++){
console.log("sha1:  " +crypto.SHA1(data).toString());

console.log("sha256:   " +  crypto.SHA256(data).toString());
//console.log(crypto.SHA256(data));

console.log("sha512:  " + crypto.SHA512(data).toString());

console.log("sha384:  " + crypto.SHA512(data).toString());



console.log("ngokimquy");

}


//console.log(crypto.SHA512(data));
/*
crypto-js/core

crypto-js/x64-core
crypto-js/lib-typedarrays
crypto-js/md5
crypto-js/sha1
crypto-js/sha256 
crypto-js/sha224
crypto-js/sha512
crypto-js/sha384
crypto-js/sha3
crypto-js/ripemd160
crypto-js/hmac-md5
crypto-js/hmac-sha1
crypto-js/hmac-sha256
crypto-js/hmac-sha224
crypto-js/hmac-sha512
crypto-js/hmac-sha384
crypto-js/hmac-sha3
crypto-js/hmac-ripemd160
crypto-js/pbkdf2
crypto-js/aes
crypto-js/tripledes
crypto-js/rc4
crypto-js/rabbit
crypto-js/rabbit-legacy
crypto-js/evpkdf
crypto-js/format-openssl
crypto-js/format-hex
crypto-js/enc-latin1
crypto-js/enc-utf8
crypto-js/enc-hex
crypto-js/enc-utf16
crypto-js/enc-base64
crypto-js/mode-cfb
crypto-js/mode-ctr
crypto-js/mode-ctr-gladman
crypto-js/mode-ofb
crypto-js/mode-ecb
crypto-js/pad-pkcs7
crypto-js/pad-ansix923
crypto-js/pad-iso10126
crypto-js/pad-iso97971
crypto-js/pad-zeropadding
crypto-js/pad-nopadding
*/
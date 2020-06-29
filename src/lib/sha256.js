var cryptojssha256 = require('crypto-js/sha256');

const SHA256s = (data1, data2) => {
    data1 = String(data1);
    data2 = String(data2);
    const datahash = "BLOCK" + cryptojssha256((data1 + data2)).toString();
    return datahash;
}

module.exports = SHA256s;
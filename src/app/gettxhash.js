const Promise = require('bluebird'),
    db = require('../db');

const GETTXHASH = (TxHash) => {
    return new Promise((resolve, reject) => {
        db.all().then((res) => {
            var result = res._result,
                checked = false,
                getdata = null;
            for (let i = (result.length - 1); i >= 0; i--) {
                if (result[i].TxHash === TxHash) {
                    checked = true;
                    getdata = {
                        Block: result[i]._key,
                        TxHash: result[i].TxHash,
                        Data: result[i].Data,
                        Timestamp: result[i].Timestamp
                    };
                    break;
                }
            }
            if (checked == true) {
                resolve(getdata);
            } else {
                reject('Error');
            }
        }).catch(() => reject('Error'));
    });
}

module.exports = GETTXHASH;
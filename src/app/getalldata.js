const Promise = require('bluebird'),
    db = require('../db');

const GETALLDATA = () => {
    return new Promise((resolve, reject) => {
        db.all().then((res) => {
            res = res._result;
            let getdata = [];
            for (let i = 0; i < res.length; i++) {
                getdata.push({
                    Block: res[i]._key,
                    TxHash: res[i].TxHash,
                    Data: res[i].Data,
                    Timestamp: res[i].Timestamp
                });
            }
            resolve(getdata);
        }).catch(() => reject('Error'));
    });
}

module.exports = GETALLDATA;
const Promise = require('bluebird'),
    { LASTBLOCK } = require('../lib'),
    db = require('../db');

const GETLASTDATA = () => {
    return new Promise((resolve, reject) => {
        LASTBLOCK().then(numblock => {
            db.document(numblock).then((res) => {
                resolve({
                    Block: res._key,
                    TxHash: res.TxHash,
                    Data: res.Data,
                    Timestamp: res.Timestamp
                });
            }).catch(() => reject('Error'));
        }).catch(() => reject('Error'));
    });
}

module.exports = GETLASTDATA;
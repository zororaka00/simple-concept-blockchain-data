const Promise = require('bluebird'),
    db = require('../db');

const GETDATABLOCK = (block) => {
    return new Promise((resolve, reject) => {
        db.document(block).then((res) => {
            resolve({
                Block: res._key,
                TxHash: res.TxHash,
                Data: res.Data,
                Timestamp: res.Timestamp
            });
        }).catch(() => reject('Error'));
    });
}

module.exports = GETDATABLOCK;
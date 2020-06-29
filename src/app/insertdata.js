const Promise = require('bluebird'),
    { LASTBLOCK, SHA256, TIMESTAMP } = require('../lib'),
    db = require('../db');

const INSERTDATA = (newdata) => {
    return new Promise((resolve, reject) => {
        LASTBLOCK().then(numblock => {
            const newblock = Number(numblock) + 1,
                nowepoch = TIMESTAMP(),
                gethash = SHA256(newblock, nowepoch),
                savedata = {
                    _key: `${newblock}`,
                    TxHash: gethash,
                    Data: newdata,
                    Timestamp: nowepoch
                };
            db.save(savedata).then(() => resolve('Success')).catch(() => reject('Error'));
        }).catch(() => reject('Error'));
    });
}

module.exports = INSERTDATA;
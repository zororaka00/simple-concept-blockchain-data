var Promise = require('bluebird'),
    db = require('../db');

const LASTBLOCK = () => {
    return new Promise((resolve, reject) => {
        db.all().then(
            cursor => cursor.map(doc => doc._key)
        ).then(keys => {
            const length = keys.length,
                numlast = (length > 0) ? keys[Number(length - 1)]:0;
            resolve(numlast);
        }).catch(() => reject('Error'));
    });
}

module.exports = LASTBLOCK;
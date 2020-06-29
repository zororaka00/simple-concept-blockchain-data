const TIMESTAMP = () => {
    var now = new Date();
    now = Math.floor(now / 1000);
    return now;
}

module.exports = TIMESTAMP;
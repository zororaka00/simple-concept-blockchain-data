const arangojs = require('arangojs');

require('dotenv').config();

var env = process.env,
    host = env.host,
    port = env.port,
    username = env.username,
    password = env.password,
    namedb = env.namedb,
    urlarangodb = `http://${host}:${port}`,
    db = new arangojs.Database({ url: urlarangodb });
    
db.useBasicAuth(username, password);
db.useDatabase(namedb);
db = db.collection(env.collection);

module.exports = db;
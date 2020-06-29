const { INSERTDATA, GETLASTDATA, GETDATABLOCK, GETTXHASH, GETALLDATA } = require('./app');

//Insert new data
INSERTDATA('inputstringdata').then(
    res => console.log(res),
    err => console.log(err)
);

//Get data last Block
GETLASTDATA().then(
    res => console.log(res),
    err => console.log(err)
);

//Get data searching block
GETDATABLOCK('1').then(
    res => console.log(res),
    err => console.log(err)
);

//Get data searching TxHash
GETTXHASH('BLOCKxxxxx').then(
    res => console.log(res),
    err => console.log(err)
);

//Get all data blocks
GETALLDATA().then(
    res => console.log(res),
    err => console.log(err)
);
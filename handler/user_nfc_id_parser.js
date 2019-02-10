const USER_NFC_ID = require('../models/user_entry').USER_NFC_ID;
const getNFCIds = (records) => {
    let nfcIdsToUpdate = [];
    records.forEach(record => {
        // console.log(record);
        console.log(record[[USER_NFC_ID]]);
        nfcIdsToUpdate.push(record[[USER_NFC_ID]]);
    });
    return nfcIdsToUpdate;
};

module.exports = getNFCIds;
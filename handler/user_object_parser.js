const userEntry = require('../models/user_entry');
const objectParser = (objectArray) => {
    return new Promise((resolve, reject) => {
        let recordsToBeInserted = [];
        if(objectArray.length === 0) {
            console.log('Empty user object');
            resolve([0]);
            return;
        }
        objectArray.forEach(user => {
            const user_nfc_id = user[[userEntry.USER_NFC_ID]];
            const user_name = user [[userEntry.USER_NAME]];
            recordsToBeInserted.push([user_nfc_id, user_name]);
        });
        userEntry.insertUser(recordsToBeInserted)
        .then(res => resolve(res))
        .catch(err => {
            console.log('error occured', err);
            reject(err);
        });
    });
};

module.exports = objectParser;
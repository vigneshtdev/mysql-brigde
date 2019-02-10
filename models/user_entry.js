const connection = require('../db');
const TABLE_NAME = 'users_table';
const USER_NFC_ID = 'user_nfc_id';
const USER_NAME = 'user_name';

const insertUser = (userRecords) => {
    const sqlQuery = `INSERT INTO ${TABLE_NAME} (${USER_NFC_ID}, ${USER_NAME}) VALUES ?`;
    return new Promise((resolve, reject) => {
        connection.query(sqlQuery, [userRecords], (err, rows,fields) => {
            if(err) {
                reject(err);
            } else {
                resolve(rows);
            }
        }); 
    });
}; 

module.exports = {
    insertUser,
    USER_NFC_ID,
    USER_NAME
};
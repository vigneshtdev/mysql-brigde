const connection = require('../db');
const TABLE_NAME = 'attendance_table';
const ATTENDANCE_ID = 'attendance_id';
const USER_NFC_ID_ATTENDANCE = 'user_nfc_id_attendance';
const ATTENDANCE_TYPE = 'attendance_type';
const ATTENDANCE_TIMESTAMP = 'attendance_timestamp';

const insertAttendance = (attendanceRecords) => {
    // const sqlQuery = `INSERT INTO ${TABLE_NAME} (${ATTENDANCE_ID}, ${USER_NFC_ID_ATTENDANCE}, ${ATTENDANCE_TYPE}, ${ATTENDANCE_TIMESTAMP})
    //                     VALUES (${attendance_id}, '${user_nfc_id_attendance}', '${attendance_type}', '${attendance_timestamp}')`;
    // console.log(attendanceRecords);
    const sqlQuery = `INSERT INTO ${TABLE_NAME} (${ATTENDANCE_ID}, ${USER_NFC_ID_ATTENDANCE}, ${ATTENDANCE_TYPE}, ${ATTENDANCE_TIMESTAMP}) VALUES ?`;
    return new Promise((resolve, reject) => {
        connection.query(sqlQuery, [attendanceRecords], (err, rows,fields) => {
            if(err) {
                reject(err);
            } else {
                resolve(rows);
            }
        }); 
    });
};

module.exports = {
    insertAttendance, 
    ATTENDANCE_ID, 
    USER_NFC_ID_ATTENDANCE, 
    ATTENDANCE_TYPE, 
    ATTENDANCE_TIMESTAMP
};
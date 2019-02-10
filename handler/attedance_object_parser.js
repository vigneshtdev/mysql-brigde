const attendanceEntry = require('../models/attendance_entry');
const objectParser = (objectArray) => {
    // console.log(objectArray);
    return new Promise((resolve, reject) => {
        let recordsToBeInserted = [];
        if(objectArray.length === 0) {
            console.log('empty Attendance object');
            resolve([-1]);
            return;
        }
        objectArray.forEach(attendance => {
            const attendance_id = attendance[[attendanceEntry.ATTENDANCE_ID]];
            const user_nfc_id_attendance = attendance[[attendanceEntry.USER_NFC_ID_ATTENDANCE]];
            const attendance_type = attendance[[attendanceEntry.ATTENDANCE_TYPE]];
            const attendance_timestamp = attendance[[attendanceEntry.ATTENDANCE_TIMESTAMP]];
            recordsToBeInserted.push([parseInt(attendance_id), user_nfc_id_attendance, attendance_type, attendance_timestamp]);
        });
        attendanceEntry.insertAttendance(recordsToBeInserted)
        .then(res => resolve(res))
        .catch(err => {
            console.log('error occured', err);
            reject(err);
        });
    });
}

module.exports = objectParser;
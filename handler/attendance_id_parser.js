const ATTENDANCE_ID = require('../models/attendance_entry').ATTENDANCE_ID;
const getAttendanceIds = (records) => {
    let idsToUpadte = [];
    records.forEach(record => {
        // console.log(record);
        console.log(record[[ATTENDANCE_ID]]);
        idsToUpadte.push(parseInt(record[[ATTENDANCE_ID]]));
    });
    return idsToUpadte;
}
module.exports = getAttendanceIds;
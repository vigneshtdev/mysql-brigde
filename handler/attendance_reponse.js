const ATTENDANCE_RECORDS = 'attendance_records';
const responseHandler = (body) => {
    const records = body[[ATTENDANCE_RECORDS]]
    // console.log(JSON.parse(records));
    let resultRecords = [];
    JSON.parse(records).forEach(record => {
        resultRecords.push(record);
    });
    return resultRecords;
}

module.exports = responseHandler;
const USER_RECORDS = 'user_records';

const responseHandler = (body) => {
    const records = body[[USER_RECORDS]]
    // console.log(JSON.parse(records));
    let resultRecords = [];
    JSON.parse(records).forEach(record => {
        resultRecords.push(record);
    });
    return resultRecords;
}

module.exports = responseHandler;
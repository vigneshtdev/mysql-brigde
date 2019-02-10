const express = require('express')
    , router = express.Router()
    , bodyParser = require('body-parser')
    , attendanceResponseHandler = require('../handler/attendance_reponse')
    , attendanceObjectParser = require('../handler/attedance_object_parser')
    , attendanceIdParser = require('../handler/attendance_id_parser')
    , userResponseHandler = require('../handler/user_response')
    , userObjectParser = require('../handler/user_object_parser')
    , userIdParser = require('../handler/user_nfc_id_parser');

router.use(bodyParser.urlencoded({
    extended: true
}));

router.post('/sync' ,(req, res) => {
    console.log('sync request recived');

    let attendanceTableUpdatedSuccessfully = false;
    let userTableUpdatedSuccessfully = false;

    const attendanceRecordsInObject = attendanceResponseHandler(req.body);
    const attendanceIdsToUpdate = attendanceIdParser(attendanceRecordsInObject);
    
    const userRecordsInObject = userResponseHandler(req.body);
    const userNFCIdsToUpdate = userIdParser(userRecordsInObject);
    
    let attendanceTableUpdateError, userTableUpdateError;
    attendanceObjectParser(attendanceRecordsInObject)
    .then((res) => {
        console.log('attendance table');
        //res.status(200).send({"attendance_ids": attendanceIdsToUpdate});
        attendanceTableUpdatedSuccessfully = true;
    })
    .catch(err => {
        // console.log(err);

        console.log('attendance table fail');
        //  res.status(500).send(err)
        tableUpdateErrorResponse = err;
    });
    userObjectParser(userRecordsInObject)
    .then((response) => {
        console.log('user table');
        userTableUpdatedSuccessfully = true;
        if(userTableUpdatedSuccessfully && attendanceTableUpdatedSuccessfully) {
            console.log('both succesful');
            res.status(200).json({
                'attendance_ids':attendanceIdsToUpdate,
                'user_nfc_ids': userNFCIdsToUpdate
            });
        } else if (userTableUpdatedSuccessfully) {
            console.log('user table success');
            res.status(200).json({
                'user_nfc_ids': userNFCIdsToUpdate,
                'attendance_ids': []
            });
        } else if (attendanceTableUpdatedSuccessfully) {
            console.log('attendance table success');
            res.status(200).json({
                'user_nfc_ids': [],
                'attendance_ids': attendanceIdsToUpdate
            });
        }
    })
    .catch(err => {
        console.log(err);
        console.log('user table fail');
        userTableUpdateError = err;
        console.log('all fail');
        if(!attendanceTableUpdatedSuccessfully){
            res.status(500).json({
                'user_table_error':userTableUpdateError,
                'attendance_table_error':attendanceTableUpdateError
            });
        }
    });
});

module.exports = router;
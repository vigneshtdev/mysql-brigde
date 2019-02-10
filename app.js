const express = require('express')
    , app = express();
    
app.use(express.static(__dirname + '/public'));

app.use(require('./controller'));

app.listen('3000' ,() => {
    console.log("Server started running at port 3000");
});

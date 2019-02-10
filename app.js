const express = require('express')
    , app = express();
    
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));

app.use(require('./controller'));

app.listen(port ,() => {
    console.log("Server started running at port " + port);
});

const express = require('express');
const path = requier('path');
const bodyParser = require('body-parser');
const intercom = require('intercom-client');

const port = 3010;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('we have recieved something...');
})

app.listen(port, () => {
    console.log('Live on port ' + port);
});
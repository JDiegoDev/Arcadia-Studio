const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static(__dirname + '/public'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
console.log('App listen in port: ', PORT);
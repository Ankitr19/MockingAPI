const functions = require('firebase-functions');
const express = require('express');
const app = express();

// [START MIDDLEWARE]
const cors = require('cors')({origin: true});
app.use(cors);
// [END MIDDLEWARE]

app.get('/say/hello', (req, res) => {

	return res.status(200).json({"message": "Hello there... Welcome to mock server. "});

});


exports.api = functions.https.onRequest(app);
 
const PORT = 8000
const axios = require('axios')
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())

app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))






app.get('/', (req, res) => {
  let google = require('googleapis');
  let secretKey = require("./client_secret.json");
  let jwtClient = new google.google.auth.JWT(
         secretKey.client_email,
         null,
         secretKey.private_key,
         ['https://www.googleapis.com/auth/spreadsheets']);
  //authenticate request
  jwtClient.authorize(function (err, tokens) {
   if (err) {
     console.log(err);
     return;
   } else {
     console.log("Successfully connected!");
   }
  });

  //Google Sheets API
  let spreadsheetId = '1-2SwAnnIrQavHDEG6N0x3bwB52UPM_8SIouqPYDD6PM';
  let sheetRange = 'Database_v1!A:B'
  let sheets = google.google.sheets('v4');
  sheets.spreadsheets.values.get({
    auth: jwtClient,
    spreadsheetId: spreadsheetId,
    range: sheetRange
  }, function (err, response) {
    if (err) {
        console.log('The API returned an error: ' + err);
    } else { 
        const results = response.data.values
        answers = []
        count = 0
        console.log(results[1][0])
        results.shift();

        results.forEach(function() {
          const prompt = results[count][0]
          const category = results[count][1]
          answers.push({
            prompt,
            category
          })
          count += 1
        })
        res.json(answers)
    }
  });
})

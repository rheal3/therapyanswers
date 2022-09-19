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
let sheetRange = 'Database_v1!A:A'
let sheets = google.google.sheets('v4');
sheets.spreadsheets.values.get({
   auth: jwtClient,
   spreadsheetId: spreadsheetId,
   range: sheetRange
}, function (err, response) {
  if (err) {
      console.log('The API returned an error: ' + err);
  } else { 
      console.log('All:');
      console.log(response.data.values)
      for (let row of response.data.values) {
          console.log(row[0]);
      }
  }
});

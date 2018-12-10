const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const path = require('path');
const sgMail = require('@sendgrid/mail');
const serveStatic = require('serve-static');
const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  console.warn("YAY! SENDGRID_API_KEY SET!");
} else {
  console.warn("OH NO!! YOU NEED TO SET YOUR SENDGRID API KEY!");
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// viewed at http://localhost:8080
app.post('/api/mail', function(req, res) {
  const data = req.body;
  const msg = {
    to: 'info@geminienergyservices.com',
    from: 'requestquote@geminienergy.com',
    subject: `Request Quote: ${data['request-customer']}`,
    html: createMsgContent(data)
  };

  sgMail.send(msg)
    .then(() => {
      res.redirect('/');
      res.end();
    });

});

const createMsgContent = (data) => {
  const rows = Object.keys(data).reduce((str, fieldKey) => {
    str += `<tr> <td> ${fieldKey}</td> <td>${data[fieldKey]}</td> </tr> \n`;
    return str;
  }, '<tbody> \n') + '</tbody>\n';

  const tableHeader = `
      <thead>
        <tr>
        <td>Field Name</td> <td>Customer Response</td>
        </tr>
      </thead>
  `

  const table = `<table> ${tableHeader} ${rows} </table>`;

  return table;
}

app.use(serveStatic('.', {'index': ['index.html']}));

app.listen(port);

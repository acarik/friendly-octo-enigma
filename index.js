/*
let {PythonShell} = require('python-shell')

let options = {
    mode: 'text',
    pythonPath: '',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: '',
    args: []
  };

PythonShell.run('currdatetime.py', options, function (err, results) {
    if (err) throw err;
    // results is an array consisting of messages collected during execution
    console.log('results: %j', results);
  });
*/

  const express = require('express');
  const app = express();
  const path = require('path');
  
  app.get('/', function(req, res) {
      res.sendFile(path.join(__dirname, 'index.html'));
  });
  
  app.listen(process.env.PORT || 4000, function(){
      console.log('Your node js server is running');
  });
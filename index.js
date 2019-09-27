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
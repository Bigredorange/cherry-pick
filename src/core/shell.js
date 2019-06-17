const shelljs = require('shelljs');

const child = shelljs.exec('ls', { async: true });
child.stdout.on('data', (data) => {
  console.log(data);
});

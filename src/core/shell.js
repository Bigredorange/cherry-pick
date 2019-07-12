const shell = require('shelljs');

let logStr = '';
shell.exec('git log', { silent: true }, (code, stdout) => {
  console.log(`data-${code}`);
  console.log(`data-${typeof stdout}`);
  console.log(`data-${stdout}`);
  logStr = stdout;
});

// export default {
//   logStr,
// };
module.exports.defalut = {
  logStr,
};
// shell.ls('.').forEach((file) => {
//   console.log(file);
// });
// const child = shelljs.exec('ls', { async: true });
// child.stdout.on('data', (data) => {
//   console.log(data);
// });

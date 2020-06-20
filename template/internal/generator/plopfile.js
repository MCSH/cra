const componentGenerator = require('./component');
const containerGenerator = require('./container');
const shell = require('shelljs');

module.exports = function (plop) {
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('container', containerGenerator);

  plop.setActionType('prettify', (answers, config) => {
    const data = config.data;
    shell.exec(`yarn prettify -- "${data.path}"`, { silent: false });
    return '';
  });

  plop.setHelper("or", 
                 function() {
      return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
    });
};

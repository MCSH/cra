/**
 * componentExists
 *
 * Check whether the given component exist in either the components or containers directory
 */

const fs = require('fs');
const path = require('path');

module.exports.componentExists = function (component) {
  const components = fs.readdirSync(
    path.join(__dirname, '../../src/app/components'),
  );
  return components.indexOf(component) >= 0;
}

module.exports.containerExists = function (container) {
  const containers = fs.readdirSync(
    path.join(__dirname, '../../src/app/components'),
  );
  return containers.indexOf(container) >= 0;
}

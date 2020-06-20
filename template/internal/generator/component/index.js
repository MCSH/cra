/**
 * Component Generator
 */
const path = require('path');

const { componentExists } = require('../utils');

let ComponentProptNames = {
  ComponentName: 'ComponentName',
  wantMemo: 'wantMemo',
  wantTranslations: 'wantTranslations',
  wantLoadable: 'wantLoadable',
  wantTests: 'wantTests',
};

const componentsPath = path.join(__dirname, '../../../src/app/components');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'input',
      name: ComponentProptNames.ComponentName,
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: ComponentProptNames.wantMemo,
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: ComponentProptNames.wantTranslations,
      default: false,
      message:
        'Do you want i18n translations (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: ComponentProptNames.wantLoadable,
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
    {
      type: 'confirm',
      name: ComponentProptNames.wantTests,
      default: true,
      message: 'Do you want to have tests?',
    },
  ],
  actions: (data) => {
    const containerPath = `${componentsPath}/{{properCase ${ComponentProptNames.ComponentName}}}`;

    const actions = [
      {
        type: 'add',
        path: `${containerPath}/index.js`,
        templateFile: './component/index.js.hbs',
        abortOnFail: true,
      },
    ];

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: `${containerPath}/Loadable.js`,
        templateFile: './component/Loadable.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantTests) {
      actions.push({
        type: 'add',
        path: `${containerPath}/__tests__/index.test.js`,
        templateFile: './component/index.test.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      data: { path: `${componentsPath}/${data.ComponentName}/**` },
    });

    return actions;
  },
};

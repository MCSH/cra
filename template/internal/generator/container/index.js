/**
 * Component Generator
 */

const path = require('path');

const { containerExists } = require('../utils');

const ContainerProptNames = {
  ComponentName: 'ComponentName',
  wantMemo: 'wantMemo',
  wantHeaders: 'wantHeaders',
  wantTemplate: 'wantTemplate',
  wantSlice: 'wantSlice',
  wantSaga: 'wantSaga',
  wantTranslations: 'wantTranslations',
  wantLoadable: 'wantLoadable',
  wantTypes: 'wantsTypes',
  wantTests: 'wantTests',
};

const containersPath = path.join(__dirname, '../../../src/app/components');

module.exports = {
  description: 'Add a container component',
  prompts: [
    {
      type: 'input',
      name: ContainerProptNames.ComponentName,
      message: 'What should it be called?',
      default: 'Form',
      validate: value => {
        if (/.+/.test(value)) {
          return containerExists(value)
            ? 'A container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantMemo,
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantHeaders,
      default: false,
      message: 'Do you want headers?',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantTemplate,
      default: false,
      message: 'Do you want Template?',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantSlice,
      default: true,
      message:
        'Do you want a redux slice(actions/selectors/reducer) for this container?',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantSaga,
      default: true,
      message: 'Do you want sagas for asynchronous flows? (e.g. fetching data)',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantTranslations,
      default: false,
      message:
        'Do you want i18n translations (i.e. will this component use text)?',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantLoadable,
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantTypes,
      default: false,
      message: 'Do you want to have types(e.g. for naming states)?',
    },
    {
      type: 'confirm',
      name: ContainerProptNames.wantTests,
      default: true,
      message: 'Do you want to have tests?',
    },
  ],
  actions: (data) => {
    const containerPath = `${containersPath}/{{properCase ${ContainerProptNames.ComponentName}}}`;

    const actions = [
      {
        type: 'add',
        path: `${containerPath}/index.js`,
        templateFile: './container/index.js.hbs',
        abortOnFail: true,
      },
    ];

    if (data.wantSlice) {
      actions.push({
        type: 'add',
        path: `${containerPath}/slice.js`,
        templateFile: './container/slice.js.hbs',
        abortOnFail: true,
      });
      actions.push({
        type: 'add',
        path: `${containerPath}/selectors.js`,
        templateFile: './container/selectors.js.hbs',
        abortOnFail: true,
      });
    }
    if (data.wantTypes){
      actions.push({
        type: 'add',
        path: `${containerPath}/types.js`,
        templateFile: './container/types.js.hbs',
        abortOnFail: true,
      });
    }
    if (data.wantSaga) {
      actions.push({
        type: 'add',
        path: `${containerPath}/saga.js`,
        templateFile: './container/saga.js.hbs',
        abortOnFail: true,
      });
    }
    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: `${containerPath}/Loadable.js`,
        templateFile: './container/Loadable.js.hbs',
        abortOnFail: true,
      });
    }

    if (data.wantTests) {
      actions.push({
        type: 'add',
        path: `${containerPath}/__tests__/index.test.js`,
        templateFile: './container/index.test.js.hbs',
        abortOnFail: true,
      });
    }

    actions.push({
      type: 'prettify',
      data: { path: `${containersPath}/${data.ComponentName}/**` },
    });

    return actions;
  },
};

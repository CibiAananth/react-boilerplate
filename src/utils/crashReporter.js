/* eslint-disable no-param-reassign */
import React from 'react';
import bugsnag from '@bugsnag/js';
import bugsnagReact from '@bugsnag/plugin-react';
import ls from 'lib/core/storageFactory';

const getMyUserIdentifier = () => {
  const authProfile = ls.get('authProfile') || {};
  const userProfile = ls.get('userProfile') || {};
  return {
    id: userProfile.username || authProfile.username || '',
    username: userProfile.username || authProfile.username || '',
    email: userProfile.email || '',
    project: userProfile.project || '',
    groupID: authProfile.group_id || '',
  };
};

const reportError = (error) => {
  const bugsnagClient = bugsnag({
    apiKey: process.env.REACT_APP_SHELF_BUGSNAG_KEY,
    appVersion: process.env.REACT_APP_SHELF_VERSION,
    notifyReleaseStages: ['production', 'development', 'staging'],
    releaseStage: process.env.REACT_APP_SHELF_RELEASE_STAGE,
    beforeSend: (report) => {
      const userDetails = getMyUserIdentifier(); // a custom user resolver
      report.user = { ...userDetails };
    },
  });
  bugsnagClient.use(bugsnagReact, React);
  bugsnagClient.notify(error);
};

export default reportError;

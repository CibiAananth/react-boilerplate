/* eslint-disable import/no-extraneous-dependencies */
const { upload } = require('bugsnag-sourcemaps');
const { resolve } = require('path');
const glob = require('glob');
const fs = require('fs');
const reportBuild = require('bugsnag-build-reporter');
require('dotenv').config();

/**
 * Find all of the map files in ./build
 * @param {file} callback - callback function
 * @returns {array} - array of files
 */
function findSourceMaps(callback) {
  return glob('build/**/*/*.map', callback);
}

/**
 * Uploads the source map with accompanying sources
 * @param {file} sourceMap - single .map file
 * @returns {Promise<string>} - upload to Bugsnag
 */
function uploadSourceMap(sourceMap) {
  // Remove .map from the file to get the js filename
  const minifiedFile = sourceMap.replace('.map', '');

  // Remove absolute path to the static assets folder
  const minifiedFileRelativePath = minifiedFile.split('build/')[1];

  return upload({
    apiKey: process.env.REACT_APP_SHELF_BUGSNAG_KEY,
    appVersion: process.env.REACT_APP_SHELF_VERSION,
    overwrite: true,
    minifiedUrl:
      process.env.REACT_APP_SHELF_HOSTING_DOMAIN + minifiedFileRelativePath,
    sourceMap,
    minifiedFile,
    projectRoot: __dirname,
    uploadSources: true,
  });
}

/**
 * Delete the .map files
 * We do this to protect our source
 * @param {file} files - array of sourcemap files
 * @returns {undefined}
 */
function deleteFiles(files) {
  files.forEach((file) => {
    const path = resolve(file);
    fs.unlinkSync(path);
  });
}

/**
 * Notifies Bugsnag of the new release
 * @returns {undefined}
 */
function notifyRelease() {
  reportBuild({
    apiKey: process.env.REACT_APP_SHELF_BUGSNAG_KEY,
    appVersion: process.env.REACT_APP_SHELF_VERSION,
    releaseStage: process.env.REACT_APP_SHELF_RELEASE_STAGE,
  })
    .then(() => console.log('Bugsnag build reported'))
    .catch(err => console.log('Reporting Bugsnag build failed', err.message));
}

/**
 * Find, upload and delete Source Maps
 * @returns {undefined}
 */
function processSourceMaps() {
  findSourceMaps((_error, files) => Promise.all(files.map(uploadSourceMap))
    .then(() => {
      console.log('Bugsnag sourcemap uploaded');
      deleteFiles(files);
      notifyRelease();
    })
    .catch((e) => {
      console.log(e);
    }));
}

if (process.env.REACT_APP_SHELF_RELEASE_STAGE !== 'development') {
  processSourceMaps();
}

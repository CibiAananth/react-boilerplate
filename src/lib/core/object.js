/* eslint-disable no-param-reassign */
import _ from 'lodash';

function removeEmptyObjects(obj) {
  return _(obj)
    .pickBy(_.isObject) // pick objects only
    .mapValues(removeEmptyObjects) // call only for object values
    .omitBy(_.isEmpty) // remove all empty objects
    .assign(_.omitBy(obj, _.isObject)) // assign back primitive values
    .value();
}

const removeUndefined = obj => _.pickBy(obj, _.identity);

/**
 * Deep diff between two object, using lodash
 * @param  {Object} obj Object compared
 * @param  {Object} source   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */
function getObjectDifference(obj, source) {
  function changes(object, base) {
    return _.transform(object, (result, value, key) => {
      if (!_.isEqual(value, base[key])) {
        result[key] = _.isObject(value) && _.isObject(base[key])
          ? changes(value, base[key])
          : value;
      }
    });
  }
  return changes(obj, source);
}

export { getObjectDifference, removeEmptyObjects, removeUndefined };

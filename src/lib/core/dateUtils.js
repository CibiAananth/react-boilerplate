/* eslint-disable import/prefer-default-export */

/**
 * @name addHoursToTimestamp
 * @method
 * @example
 * // 1548284191254
 * addHours(6)
 * // 1376850600
 * let date = Math.round(new Date('12/12/12').getTime()/1000);
 * addHours(6,date)
 * @param {number} h - hours to add
 * @param {number} timestamp - epoch timestamp
 * @description Adds the given amount of hours to the given timestamp
 * @returns {number} - timestamp
 */
const addHours = (h, timestamp = Date.now()) => timestamp + h * 60 * 60 * 1000;

export { addHours };

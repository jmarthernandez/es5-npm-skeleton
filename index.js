/**
 * Adds commas to a number
 * @param {number} number
 * @param {string} locale
 * @return {string}
 */
module.exports = function toLocaleString (number, locale) {
  return number.toLocaleString(locale);
};

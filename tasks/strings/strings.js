/**
 * 1. Write a method to reverse a string; 
 * 2. The method should return the string 'This is not a string!' if trying to pass a number
 * @param {string} str
 * @return {string} reversed string
 * @example
 * console.log(reverseString('hello)) // 'olleh'
 * console.log(reverseString(123)) // 'This is not a string!'
 */
function reverseString(str) {
  if (Number.parseInt(str).toString() != str) {
    return str.split("").reverse().join("");
  } else {
    return 'This is not a string!';
  }  
}

/**
 * Calculate a century by given year if a number is passed
* @param {number} year
* @return {num} century
* @example
* console.log(centuryFromYear(1705)) // 18
* console.log(centuryFromYear(1900)) // 19
* console.log(centuryFromYear(1601)) // 17
*/
function centuryFromYear(year) {
  var century = 0;
  const remainder = year % 100;
  if (remainder === 0) {
    century = year / 100;
  } else {
    century = (year - remainder) / 100 + 1;
  }
  return century;
}

/**
 * Calculate count of the provided char in the string
 * @param {string} str
 * @param {string} char
 * @return {num} number of occurences
 * @example
 * console.log(strCount('Hello', 'o')) // 1
 * console.log(strCount('Hello', 'l')) // 2
 * console.log(strCount('', 'z')) // 0
 */
function strCount(str, char) {
  const regexp = new RegExp(char, 'gi');
  const matches = str.split('').join(' ').match(regexp);
  return matches != null ? matches.length : 0;
}

/**
 * Write a method to reduce the length of the string or truncate it if it is longer
 * than the given maximum length specified and add "..." to the end. 
 * If it is not that long then we keep it as is.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 * @return {string} truncated or the initial string
 * @example
 * console.log(truncateString('This is a long string', 6)) // 'This i...'
 * console.log(truncateString('This', 6)) // 'This'
 */
function truncateString(str, num) {
  return str.length <= num ? str : `${str.slice(0, num)}...`;
}

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 */
function replace10(text) {
  return text.replace(/10/gi, 'ten');
}

/**
 * replace value in square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
function replaceConfidential(text) {
  return text.replace(/\[.*?\]/gi, '[CONFIDENTIAL]');
}

module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};

'use strict';

/**
 * Implement convertToObject function:
 *
 * Function takes string with styles
 * and returns object where CSS properties are keys
 * and values are the values of related CSS properties

 * @param {string} sourceString
 *
 * @return {object}
 */

function convertToObject(sourceString) {
  const result = {};

  const properties = sourceString.split(';');

  properties.forEach((property) => {
    const propertyArr = property
      .split(':')
      .map(item => item.trim());

    if (propertyArr[0] !== '') {
      result[propertyArr[0]] = propertyArr[1];
    }
  });

  return result;
}

module.exports = convertToObject;

'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  const result = {};
  const parts = sourceString.split(';');

  for (const part of parts) {
    const clean = part.trim();

    if (!clean) {
      continue;
    }

    const [key, value] = clean.split(':');

    if (!value) {
      continue;
    }

    const newKey = key.trim();
    const newValue = value.trim();

    result[newKey] = newValue;
  }

  return result;
}

module.exports = convertToObject;

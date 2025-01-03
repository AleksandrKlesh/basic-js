const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  const dreamTeam = members
  .reduce((accumulator, name) => {
    if (typeof name === 'string') {
      accumulator.push(name.trim().slice(0, 1));
    }
    return accumulator;
  }, [])
  .sort()
  .join('')
  .toUpperCase()
  .split('')
  .sort()
  .join('');
  return dreamTeam || false;
}

module.exports = {
  createDreamTeam
};

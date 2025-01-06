const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(bool = true) {
    this.isReversed = bool;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const keyArr = key.toUpperCase().split('');
    const messageArr = message.toUpperCase().split('');
    let keyIndex = 0;
    let encrypted = [];
    for (let i = 0; i < messageArr.length; i++) {
      if (!this.alphabet.includes(messageArr[i])) {
        encrypted.push(messageArr[i])
        continue;
      }
      if (keyIndex >= keyArr.length) {
        keyIndex = 0;
      }
      const encryptedLetterIndex = this.alphabet.indexOf(messageArr[i]) + this.alphabet.indexOf(keyArr[keyIndex]);
      const encryptedLetter = this.alphabet[encryptedLetterIndex % 26];
      encrypted.push(encryptedLetter);
      keyIndex++;
    }
    return this.isReversed ? encrypted.join('') : encrypted.reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const keyArr = key.toUpperCase().split('');
    const messageArr = message.toUpperCase().split('');
    let keyIndex = 0;
    let decrypted = [];
    for (let i = 0; i < messageArr.length; i++) {
      if (!this.alphabet.includes(messageArr[i])) {
        decrypted.push(messageArr[i]);
        continue;
      }
      if (keyIndex >= keyArr.length) {
        keyIndex = 0;
      }
      const decryptedLetterIndex = this.alphabet.indexOf(messageArr[i]) - this.alphabet.indexOf(keyArr[keyIndex]);
      const decryptedLetter = this.alphabet[(decryptedLetterIndex + 26) % 26]
      decrypted.push(decryptedLetter);
      keyIndex++;
    }
    return this.isReversed ? decrypted.join('') : decrypted.reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

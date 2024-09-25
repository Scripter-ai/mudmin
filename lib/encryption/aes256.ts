import crypto from 'crypto';

// Generate a key and an initialization vector (IV)
const algorithm = 'aes-256-cbc';
const secretKey = process.env.ENCRYPTION_SECRET_KEY || 'defaultSecretKey1234567890123456'; // Must be 32 characters (256 bits)
const iv = process.env.ENCRYPTION_IV || crypto.randomBytes(16).toString('hex').slice(0, 16); // 16 bytes for AES

/**
 * Converts ASCII string to hexadecimal format.
 * @param {string} asciiString - The ASCII string to convert.
 * @returns {string} - The hexadecimal representation of the ASCII string.
 */
const asciiToHex = (asciiString: string): string => {
  return Buffer.from(asciiString, 'ascii').toString('hex');
};

/**
 * Converts hexadecimal string back to ASCII format.
 * @param {string} hexString - The hexadecimal string to convert.
 * @returns {string} - The ASCII representation of the hexadecimal string.
 */
const hexToAscii = (hexString: string): string => {
  return Buffer.from(hexString, 'hex').toString('ascii');
};

/**
 * Encrypts the given text using AES-256-CBC algorithm.
 * @param {string} text - The text to encrypt.
 * @returns {string} - The encrypted data in Base64 format.
 */
export const encrypt = (text: string): string => {
  // Convert ASCII to hexadecimal
  const hexData = asciiToHex(text);

  // Create cipher instance
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(secretKey, 'utf-8'), iv);

  // Encrypt the data
  let encrypted = cipher.update(hexData, 'utf-8', 'base64');
  encrypted += cipher.final('base64');

  return encrypted;
};

/**
 * Decrypts the given Base64 string using AES-256-CBC algorithm.
 * @param {string} encryptedText - The encrypted data in Base64 format.
 * @returns {string} - The decrypted text.
 */
export const decrypt = (encryptedText: string): string => {
  // Create decipher instance
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secretKey, 'utf-8'), iv);

  // Decrypt the data from Base64 to hexadecimal
  let decrypted = decipher.update(encryptedText, 'base64', 'utf-8');
  decrypted += decipher.final('utf-8');

  // Convert hexadecimal back to ASCII
  const asciiData = hexToAscii(decrypted);

  return asciiData;
};

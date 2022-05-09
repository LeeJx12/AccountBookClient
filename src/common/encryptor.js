
const CryptoJS = require('crypto-js');

const aesKey = 'a12eadf09j2nfad3mn4i8qdw0zcvk24t';
const iv = aesKey.substring(0, 16);

const Encryptor = {
    encrypt: pwd => {
        const cipher = CryptoJS.AES.encrypt(pwd, CryptoJS.enc.Utf8.parse(aesKey), {
            iv: CryptoJS.enc.Utf8.parse(iv),
            padding: CryptoJS.pad.Pkcs7,
            mode: CryptoJS.mode.CBC
        })
        return cipher.toString();
    },
    decrypt: pwd => {
        const bytes = CryptoJS.AES.decrypt(pwd, aesKey);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
}

export default Encryptor;
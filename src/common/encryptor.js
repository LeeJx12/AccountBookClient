
const CryptoJS = require('crypto-js');

const aesKey = 'a12eadf09j2nfad3mn4i8qdw0zcvk24t';

const Encryptor = {
    encrypt: pwd => {
        return CryptoJS.AES.encrypt(pwd, aesKey).toString();
    },
    decrypt: pwd => {
        const bytes = CryptoJS.AES.decrypt(pwd, aesKey);
        return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    }
}

export default Encryptor;
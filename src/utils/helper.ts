import CryptoJS from "crypto-js";

export const generateAuthToken = (length: number = 32): string => {
  const AUTH_TOKEN_SECRET = import.meta.env.VITE_AUTH_TOKEN_SECRET;
  let token = "";
  for (let i = 0; i < length; i++) {
    token += AUTH_TOKEN_SECRET.charAt(Math.floor(Math.random() * AUTH_TOKEN_SECRET.length));
  }
  return token;
}

export const encryptTxt = (text: string) => {
  const ENCRYPTION_SECRET = import.meta.env.VITE_ENCRYPTION_SECRET;
  return CryptoJS.AES.encrypt(text, ENCRYPTION_SECRET).toString();
};

export const decryptTxt = (cipherText: string) => {
  const ENCRYPTION_SECRET = import.meta.env.VITE_ENCRYPTION_SECRET;
  const bytes = CryptoJS.AES.decrypt(cipherText, ENCRYPTION_SECRET);
  return bytes.toString(CryptoJS.enc.Utf8);
};
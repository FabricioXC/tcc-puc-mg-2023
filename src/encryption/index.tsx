import AES from "crypto-js/aes";
import { enc } from "crypto-js";
export const encryptId = (str: string) => {
  const ciphertext = AES.encrypt(
    str,
    process.env.APP_ENCRYPT_KEY as string
    // '-D*Jx<u^]6#kNt%Q]cD[9-0$#Y";WpG;LxtbH8wgRNE`$zK)$"^"yV&M-oagf^!'
  );
  console.log("Ciphertext: ", ciphertext.toString());
  return encodeURIComponent(ciphertext.toString());
};

export const decryptId = (str: string) => {
  const decodedStr = decodeURIComponent(str);
  return AES.decrypt(
    decodedStr,
    process.env.APP_ENCRYPT_KEY as string
    // '-D*Jx<u^]6#kNt%Q]cD[9-0$#Y";WpG;LxtbH8wgRNE`$zK)$"^"yV&M-oagf^!'
  ).toString(enc.Utf8);
};

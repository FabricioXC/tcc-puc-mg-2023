const admin = require("firebase-admin");

import { serviceAccount } from "./firebaseAdminConfig";
export const verifyIdToken = async (token: string) => {
  console.log("Service Account: ", serviceAccount);
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }
  console.log("Admin: ", admin);
  const decodedToken = await admin
    .auth()
    .verifyIdToken(String(token))
    .then((decodedToken: any) => {
      // const uid = decodedToken.uid;
      console.log("Decoded Token: ", decodedToken);
      return decodedToken;
      // ...
    })
    .catch((error: any) => {
      console.log("Error: ", error);
      throw error;
    });
  // console.log("Decoded Token: ", decodedToken);
  return decodedToken;
};

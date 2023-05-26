const admin = require("firebase-admin");

import { serviceAccount } from "./firebaseAdminConfig";
export const verifyIdToken = async (token: string) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
  }

  const decodedToken = await admin
    .auth()
    .verifyIdToken(token)
    .catch((error: any) => {
      throw error;
    });
  return decodedToken;
};

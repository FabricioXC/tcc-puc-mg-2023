const admin = require("firebase-admin");
const serviceAccount = require("./secrets.json");

export const verifyIdToken = async (token: string) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      //   databaseURL: "https://nextjs-firebase-auth-3b3a9.firebaseio.com",
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

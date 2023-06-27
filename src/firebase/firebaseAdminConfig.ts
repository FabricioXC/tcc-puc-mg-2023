export const serviceAccount = {
  type: "service_account",
  project_id: "tcc-puc-2023",
  private_key_id: `${process.env.FIREBASE_ADMIN_KEY_ID}`,
  private_key: process.env.FIREBASE_ADMIN_PRIVATE_KEY
    ? process.env.FIREBASE_ADMIN_PRIVATE_KEY.replace(/\\n/g, "\n")
    : "",
  client_email: "firebase-adminsdk-4t184@tcc-puc-2023.iam.gserviceaccount.com",
  client_id: "117248072631176513720",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4t184%40tcc-puc-2023.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

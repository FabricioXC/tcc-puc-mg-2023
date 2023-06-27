/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    FIREBASE_API_KEY: `${process.env.NEXT_PUBLIC_FIREBASE_API_KEY}`,
    FIREBASE_AUTH_DOMAIN: `${process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN}`,
    FIREBASE_PROJECT_ID: `${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}`,
    FIREBASE_STORAGE_BUCKET: `${process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET}`,
    FIREBASE_MESSAGING_SENDER_ID: `${process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID}`,
    FIREBASE_APP_ID: `${process.env.NEXT_PUBLIC_FIREBASE_APP_ID}`,
    FIREBASE_MEASUREMENT_ID: `${process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID}`,
    APP_ENCRYPT_KEY: `${process.env.NEXT_PUBLIC_APP_ENCRYPT_KEY}`,
    FIREBASE_ADMIN_PRIVATE_KEY: `${process.env.NEXT_PUBLIC_FIREBASE_ADMIN_PRIVATE_KEY}`,
    FIREBASE_ADMIN_KEY_ID: `${process.env.NEXT_PUBLIC_FIREBASE_ADMIN_KEY_ID}`,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        // pathname: "/a/AGNmyxaI9qnyQhJPj2426p_Zcqfkpzi1AfIwHlE-kmH4ZLY=s96-c",
      },
    ],
  },
};

module.exports = nextConfig;

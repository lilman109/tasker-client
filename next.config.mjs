/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TASKS_URL: process.env.TASKS_URL,
    USER_SIGNIN_URL: process.env.USER_SIGNIN_URL,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TASKS_URL: process.env.TASKS_URL,
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    TASKS_URL: process.env.TASKS_URL,
    USER_SIGNIN_URL: process.env.USER_SIGNIN_URL,
    IS_USER_AUTHENTICATED_URL: process.env.IS_USER_AUTHENTICATED_URL,
    GRAPHQL_URL: process.env.GRAPHQL_URL,
  },
};

export default nextConfig;

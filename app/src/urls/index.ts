const serverURL =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:2023'
    : 'https://ordr-ua19.onrender.com';
const apiURL = `${serverURL}/api`;

export { serverURL, apiURL };

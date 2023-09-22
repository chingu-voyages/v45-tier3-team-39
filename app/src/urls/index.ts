const serverURL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:2023' : '';
const apiURL = `${serverURL}/api`;

export { serverURL, apiURL };

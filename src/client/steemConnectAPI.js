import steemconnect from 'steemconnect';

const api = new steemconnect.Client({
app: process.env.STEEMCONNECT_CLIENT_ID,
  //baseURL: "https://steemconnect.com",
  callbackURL: process.env.STEEMCONNECT_REDIRECT_URL,
});

export default api;

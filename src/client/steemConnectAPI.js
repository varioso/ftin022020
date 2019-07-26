import sc2 from 'sc2-sdk';

const api = sc2.Initialize({
app: process.env.STEEMCONNECT_CLIENT_ID,
  baseURL: https://api.steemconnect.com/api/oauth2/authorize,
  callbackURL: process.env.STEEMCONNECT_REDIRECT_URL,
});

export default api;

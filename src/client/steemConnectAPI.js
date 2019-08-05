import steemconnect from 'steemconnect';

const api = new steemconnect.Client({
app: "ftinetwork",
  baseURL: "https://steemconnect.com",
  callbackURL: "http://network.futuretechinsider.com/callback",
});

export default api;

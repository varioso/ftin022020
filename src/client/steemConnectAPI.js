import sc from 'steemconnect';

const api = new sc.Client({
app: "ftinetwork",
  baseURL: "https://steemconnect.com",
  callbackURL: "http://network.futuretechinsider.com/callback",
});

export default api;

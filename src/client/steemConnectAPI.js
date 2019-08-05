import sc2 from 'steemconnect';

const api = new sc.Client({
app: "ftinetwork",
  baseURL: "https://steemconnect.com",
  callbackURL: "http://network.futuretechinsider.com/callback",
});

export default api;

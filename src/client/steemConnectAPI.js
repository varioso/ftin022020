import sc2 from 'sc2-sdk';

const api = sc2.Initialize({
app: "ftinetwork",
baseURL: "https://steemconnect.com",
callbackURL: "https://ftin.herokuapp.com/callback",
});

export default api;

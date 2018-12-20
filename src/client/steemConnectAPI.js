import sc2 from 'sc2-sdk';

const api = sc2.Initialize({
app: "FTI",
baseURL: "https://v2.steemconnect.com",
callbackURL: "https://ftin.herokuapp.com/callback",
scope: ["GET, PUT, FETCH, POST"]
});

export default api;

import sc2 from 'sc2-sdk';

const api = sc2.Initialize({
app: "ftinetwork",
baseURL: "https://v2.steemconnect.com",
callbackURL: "https://ftin.herokuapp.com/callback",
scope: ["vote, comment, delete_comment, comment_options, custom_json, claim_reward_balance, login, offline"]
});

export default api;

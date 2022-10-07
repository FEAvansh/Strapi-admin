// module.exports = ({ env }) => ({
//   host: env("HOST", "0.0.0.0"),
//   proxy: true,
//   app: {
//     keys: env.array("APP_KEYS"),
//   },
// });

module.exports = ({ env }) => ({
  url: env("MY_HEROKU_URL"),
  proxy: true,
  app: {
    keys: env.array("APP_KEYS", ["HELLOWTHISADMINSTRAPI1316", "HELLOWMYSELFADMINVANSH1316"]),
  },
});

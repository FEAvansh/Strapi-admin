module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "auth-db162.hstgr.io"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "u401956558_reacttest"),
      user: env("DATABASE_USERNAME", "u401956558_reacttest"),
      password: env("DATABASE_PASSWORD", "reactTest@691"),
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
    },
    debug: false,
  },
});

// const path = require('path');

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

// const parse = require('pg-connection-string').parse
// const config = parse(process.env.DATABASE_URL);
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: config.host,
//       port: config.port,
//       database: config.database,
//       user: config.user,
//       password: config.password,
//       ssl: {
//         rejectUnauthorized: false
//       },
//     },
//     debug: false,
//   },
// });

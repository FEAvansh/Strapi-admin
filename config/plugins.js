const crypto = require("crypto");

module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET") || crypto.randomBytes(16).toString("base64"),
    },
  },
});

module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME", "dw0ufxuez"),
        api_key: env("CLOUDINARY_KEY", "973281437976987"),
        api_secret: env("CLOUDINARY_SECRET", "DKRTCP-5dJkVWM9LfgZEGjThvRs"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});

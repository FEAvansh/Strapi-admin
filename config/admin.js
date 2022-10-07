module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'HELLOWMYSELFADMINVANSH1316'),
  },
  auth: {
    events: {
      onConnectionSuccess(e) {
        console.log(e.user, e.provider);
      },
      onConnectionError(e) {
        console.error(e.error, e.provider);
      },
    },
    options: {
      expiresIn: '7d',
    },
    secret: env('ADMIN_JWT_SECRET', 'HELLOWTHISADMINSTRAPI1316'),
  },
  url: env('PUBLIC_ADMIN_URL', '/dashboard'),
  autoOpen: false,
  watchIgnoreFiles: [
    './my-custom-folder', // Folder
    './scripts/someScript.sh', // File
  ],
  host: 'localhost', // Only used for --watch-admin
  port: 8003, // Only used for --watch-admin
  serveAdminPanel: env.bool('SERVE_ADMIN', true),
  forgotPassword: {
    from: 'no-reply@example.com',
    replyTo: 'no-reply@example.com',
  },
});
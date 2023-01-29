const dotenv = require('dotenv');

dotenv.config();

const { APP_PORT, JWT_SECRET } = process.env;

export const APP_CONFIG = {
  port: +APP_PORT || 3000,
  secret: JWT_SECRET,
};

const dotenv = require('dotenv');

dotenv.config();

const openAPIKey = process.env.OPEN_API_KEY;

module.exports = {
    openAPIKey
}
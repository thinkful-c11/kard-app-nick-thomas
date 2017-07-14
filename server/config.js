require('dotenv').config();

exports.DATABASE_URL = process.env.DATABASE_URL ||
                       global.DATABASE_URL ||
                      'mongodb://localhost/kard';
exports.TEST_DATABASE_URL = (
	process.env.TEST_DATABASE_URL ||
	'mongodb://localhost/kard-test');
exports.PORT = process.env.PORT || 3001;

exports.API_KEY = process.env.API_KEY;
exports.DOMAIN = process.env.DOMAIN;

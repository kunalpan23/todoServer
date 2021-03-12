const express = require('express');
const app = express();

const createConnection = require('./dbUtils/dbConnection');

(async () => {
	await createConnection(app);
	/* Middleware */
	app.use('/', require('./routers/router'));
})();

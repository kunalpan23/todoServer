const express = require('express');
const app = express();
const cors = require('cors');
const createConnection = require('./dbUtils/dbConnection');

(async () => {
	await createConnection(app);
	/* Middleware */
	app.use(cors());
	app.use('/', require('./routers/router'));
})();

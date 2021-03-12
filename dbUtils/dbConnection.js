const mongoose = require('mongoose');
const { dbUtil } = require('./dbUtils');
const chalk = require('chalk');

const dbURI = dbUtil.DB_URI;

module.exports = async function (app) {
	app.set('port', process.env.PORT || '5000');

	await mongoose
		.connect(dbURI, {
			useNewUrlParser: true,
			useCreateIndex: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		})
		.then(() => {
			console.log(chalk.green.bold`\n\tDB Connected\n`);

			app.listen(app.get('port'), () =>
				console.log(
					chalk.magenta.bold.underline`\tServer is Running on =>\t`,
					chalk.blueBright(app.get('port'))
				)
			);
		})
		.catch((err) =>
			console.log(chalk.red.bgRed.white`Error connecting to DB.`)
		);
};

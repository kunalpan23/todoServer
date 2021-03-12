require('dotenv').config();

class DB_UTILS {
	get DB_URI() {
		return `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_CLUSTER_INFO}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
	}
}

const dbUtil = new DB_UTILS();

module.exports = {
	dbUtil
};

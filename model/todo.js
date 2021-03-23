const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema(
	{
		completed: {
			type: Number,
			required: true
		},
		label: {
			type: String,
			required: true
		},
		updateHistory: Array
	},
	{ timestamps: true }
);

const TodoModel = mongoose.model('todo-lists', todoSchema);

module.exports = TodoModel;

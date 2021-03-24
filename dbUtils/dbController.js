const TodoModel = require('../model/todo');

function sendErrorWithStatus(res, status = 500) {
	return res.send({ status, message: 'Error' }).status(status);
}

function sendSuccessResponseWithData(res, data) {
	return res.send(data).status(200);
}

module.exports = {
	getAllTodo(req, res) {
		return TodoModel.find()
			.then((data) => sendSuccessResponseWithData(res, data))
			.catch((err) => sendErrorWithStatus(res, err?.status));
	},
	addTodo(req, res) {
		console.log(req.query);
		const newTodo = new TodoModel(req.query);
		newTodo.save((err, data) => {
			if (err) return sendErrorWithStatus(res, err?.status);

			return sendSuccessResponseWithData(res, data);
		});
	},
	updateTodo(req, res) {
		const { id, edited, completed } = req.query;

		TodoModel.findById(id, (err, foundData) => {
			if (err) return sendErrorWithStatus(res, err?.status);

			const { updateHistory } = foundData;

			if (!!edited && Array.isArray(updateHistory)) {
				updateHistory.push(edited);
			}

			return TodoModel.findByIdAndUpdate(
				id,
				{ updateHistory: updateHistory, completed: completed },
				(err, updatedData) => {
					if (err) return sendErrorWithStatus(res, err?.status);
					return sendSuccessResponseWithData(res, updatedData);
				}
			);
		});
	},
	removeTodo(req, res) {
		const {id} = req.query; 
		TodoModel.findByIdAndRemove(id, function(err,docs){
			if(err) return sendErrorWithStatus(res, err?.status);
			
			return sendSuccessResponseWithData(res,docs);
		})
	}
};

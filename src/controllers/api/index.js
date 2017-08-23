const watson = require('../../watson');

function handleScore (req, res, next) {
	const query = req.query;
	const branchName = query.branchName;
	const programType = query.programType;
	const time = query.time;
	console.log(branchName + "\t" + programType + "\t" + time);
	const score = watson.getScore(branchName, programType, time);
	console.log(score);
	res.json(
		{
			branchName,
			programType,
			time,
			score,
		}
	);
}

module.exports = Object.freeze(
	{
		handleScore,
	}
);

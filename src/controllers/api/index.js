const watson = require('../../watson');
const request = require('request-promise');
var test = '';
function getPrediction(branchName, programType, time) {
	var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6ImE0ZDk5YmQwLWZiZGEtNDNlMC05MjdhLTRiODM3ZWExZjI5MiIsImluc3RhbmNlSWQiOiJhNGQ5OWJkMC1mYmRhLTQzZTAtOTI3YS00YjgzN2VhMWYyOTIiLCJwbGFuSWQiOiIzZjZhY2Y0My1lZGU4LTQxM2EtYWM2OS1mOGFmM2JiMGNiZmUiLCJyZWdpb24iOiJ1cy1zb3V0aCIsInVzZXJJZCI6IjBjMTZiNWVkLTk4ZjEtNDZmNS1iYWYwLTg3YTMwYTQ2ZDFmZSIsImlzcyI6Imh0dHA6Ly8xMjkuNDEuMjI5LjE4ODo4MDgwL3YyL2lkZW50aXR5IiwiaWF0IjoxNTAzNTk4MjE1LCJleHAiOjE1MDM2MjcwMTV9.Kmwiu1-Hod7gQHKOMkJGs4g2ieLqLTL_LtyyWHz6juYmBbZaSwuNxzKTPyHafDVWrpi0Zd9lmSEqWJzSBSNgLepIR28Eho8wW_tyaAdwPEvSYyY4zYqTO-Y2N5TTQnAEsZQGz1inBl80rVtx2xM5c2E94VZNt5yUE19pQ4dp1_rHzaxsAwJxVASovE9AATSYKU8H9bv5SkjrU-J8MwHIXFiOF9CBLAOZXnTI9Yea0d7Z4s8c5OF5M5ETsL00T_Xcchbm5ItkIiILGsq7KQj2RyuMZ7bEh8nV__IaVyjmQgwB_jB38qf7SuFQVGMJ8eHIxIumO0Jf1FYY4-U4bekquw'
	};

	var options = {
    method: 'POST',
    headers: headers,
    uri: 'https://ibm-watson-ml.mybluemix.net/v3/wml_instances/a4d99bd0-fbda-43e0-927a-4b837ea1f292/published_models/8f97d501-a941-404a-bd1f-cf1cb8a2edff/deployments/57a57202-ace7-48d8-a22a-3218365cc345/online',
    body: {
        fields: ["Branch", "Program Type", "Time of Program"],
        values: [[branchName, programType, time]]
    },
    json: true // Automatically stringifies the body to JSON
    };
 
	return request(options)
    .then(function (parsedBody) {
        // POST succeeded... 

        test = parsedBody.values[0][7].toString();
        return test;
    })
    .catch(function (err) {
        console.log(err);
    });
  }

function readScore() {
	return test;
}

function handleScore (req, res, next) {
	const query = req.query;
	//const branchName = query.branchName;
	//const programType = query.programType;
	//const time = query.time;
	const branchName = "Agincourt";
	const programType = "Cultural";
	const time = "9 am-12:30 pm";
	console.log(branchName + "\t" + programType + "\t" + time);
	//watson.getScore(branchName, programType, time);
	getPrediction(branchName, programType, time);
	res.json(
		{
			branchName,
			programType,
			time,
		}
	);
}

module.exports = Object.freeze(
	{
		handleScore,
		getPrediction,
		readScore
	}
);

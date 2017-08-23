const request = require('request');

var headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJ0ZW5hbnRJZCI6ImE0ZDk5YmQwLWZiZGEtNDNlMC05MjdhLTRiODM3ZWExZjI5MiIsImluc3RhbmNlSWQiOiJhNGQ5OWJkMC1mYmRhLTQzZTAtOTI3YS00YjgzN2VhMWYyOTIiLCJwbGFuSWQiOiIzZjZhY2Y0My1lZGU4LTQxM2EtYWM2OS1mOGFmM2JiMGNiZmUiLCJyZWdpb24iOiJ1cy1zb3V0aCIsInVzZXJJZCI6IjBjMTZiNWVkLTk4ZjEtNDZmNS1iYWYwLTg3YTMwYTQ2ZDFmZSIsImlzcyI6Imh0dHA6Ly8xMjkuNDEuMjI5LjE4ODo4MDgwL3YyL2lkZW50aXR5IiwiaWF0IjoxNTAzNTA4ODcyLCJleHAiOjE1MDM1Mzc2NzJ9.gUp-uyN-8tnEgJvQoDXthKdkNWEW8fE_9YRBIHLOklofAPgXiWrpsyR1K468nuvt1jjQBh9lIGHRtux-sRzX_iSoFWEx1v5WfNe_3Qw32Q83gTIdd-M-NeV4dF_qBho9qHkJJPZhvMT6xQppXCKB_XgxTaT9Qj7rAkEYo4jC1iiuuyBt-f2KDKZBPULo1HTYY85JMizJg9apILOddJhPkRnY3YFoJUu3yHZpyHEpIPVScZGKUyBsr5b2SZ-UHTBivBX98IbrXpT8XOlxU7m5oKL3d7CMb9IiS7uVutzZax78tcMSG1oV1cDMgcEhOXxxry3zPyk3-0LRXXkOyRszAA'};

var dataFormat = '{"fields": ["Name","Type"], "values": [["Agincourt","Cultural"]]}';

function callback(error, response, body) {
    console.log(JSON.parse(body).values[0][4]);
    let text = JSON.parse(body).values[0][6].toString();
    return text;
}

function getScore (branchName, programType, time) {
	let dataString = '{"fields": ["Name","Type", "Time"], "values": [["' + branchName + '","' + programType + '","' + time + '"]]}';
	let options = {
    url: 'https://ibm-watson-ml.mybluemix.net/v3/wml_instances/a4d99bd0-fbda-43e0-927a-4b837ea1f292/published_models/fe4f0397-f71e-45e9-befa-513c9db1838a/deployments/5318352e-8b39-4b3e-8bf2-2c0c5f41ab00/online',
    method: 'POST',
    headers: headers,
    body: dataString
};
	console.log(dataString);
	return request(options, callback);
}

module.exports = Object.freeze(
	{
		getScore,
	}
);

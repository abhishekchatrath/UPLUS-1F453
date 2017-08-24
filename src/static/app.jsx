class TPLApp extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			prediction: '',
			probabilityYes: '',
			probabilityNo: ''
		}
	}

  getPrediction(branchName, programType, time) {
  	axios.post("http://localhost:8080/api/watson", {
        branchName: branchName,
        programType: programType,
        time: time
      })
      .then((response) => {
      	this.setState({
      		prediction: response.data[0],
      		probabilityNo: response.data[1],
      		probabilityYes: response.data[2]
      	});
      })
      .catch(function (error) {
        console.log(error);
      });
  	
  }

  componentDidMount() {
    this.getPrediction('Agincourt', 'Cultural', '3:30-6 pm');
  }

	render() {
		return (
			<div>
				<div className="header">
        			<div className="header__row">
            			<div id="logo">
                			<a href="#">
                    		<img className="" alt="Toronto Public Library Homepage" src="TPL-Logo.jpg" height="42"></img>
                			</a>
            			</div>
        			</div>
    			</div>
    			<div className="header__body">
        			<div className="selectors">
        			Should I hold the event?: {this.state.prediction},
        			Probability of yes: {this.state.probabilityYes},
        			Probability of no: {this.state.probabilityNo}
        			</div>
        		</div>
			</div>
		);
	}
}

ReactDOM.render(
  <TPLApp />,
  document.getElementById('root')
);

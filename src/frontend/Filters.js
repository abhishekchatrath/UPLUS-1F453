import React, { Component } from 'react';
import CardList from './CardList';

class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            branch: 'br6',
            program: 'program-2',
            time: 'time-2'
        };

        this.handleChangeBranch = this.handleChangeBranch.bind(this);
        this.handleChangeProgram = this.handleChangeProgram.bind(this);
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChangeBranch(event) {

        this.setState({
            branch: event.target.value
        });
    }
    handleChangeProgram(event) {

        this.setState({
            program: event.target.value
        });
    }
    handleChangeTime(event) {

        this.setState({
            time: event.target.value
        });
    }

    handleSubmit(event) {
        alert('Your favorite options are: ' + this.state.branch + ' ' + this.state.program + ' ' +  this.state.time);
        event.preventDefault();
    }

      render() {
        return (
                <form className="selectors" onSubmit={this.handleSubmit}>
                   <label for="selector__branch">Branch:</label>
                    <span className="selector">
                        <select className="selector__branch" name="options" id="selector-branch" value={this.state.branch} onChange={this.handleChangeBranch}>
                            <option value="none">None</option>
                            <option value="br1">Agincourt</option>
                            <option value="br2">Albert Campbell</option>
                            <option value="br3">Albion</option>
                            <option value="br4">Annette Street</option>
                            <option value="br5">Barbara Frum</option>
                            <option value="br6">Bloor/Gladstone</option>
                            <option value="br7">Brentwood</option>
                            <option value="br8">Cedarbrae</option>
                            <option value="br9">Don Mills</option>
                            <option value="br10">Downsview</option>
                            <option value="br11">Eatonville</option>
                            <option value="br12">Fairview</option>
                            <option value="br13">Flemingdon Park</option>
                            <option value="br14">Goldhawk Park</option>
                            <option value="br15">Lillian H. Smith</option>
                            <option value="br16">Malvern</option>
                            <option value="br17">Maria A. Shchuka</option>
                            <option value="br18">McGregor Park</option>
                            <option value="br19">New Toronto</option>
                            <option value="br20">North York Central</option>
                            <option value="br21">Northern District</option>
                            <option value="br22">Pape/Danforth</option>
                            <option value="br23">Parkdale</option>
                            <option value="br24">Parliament Street</option>
                            <option value="br25">Richview</option>
                            <option value="br26">S. Walter Stewart</option>
                            <option value="br27">Toronto Reference Library</option>
                            <option value="br28">York Woods</option>
                            <option value="br29">Alderwood</option>
                            <option value="br30">Bayview</option>
                            <option value="br31">Beaches</option>
                            <option value="br32">Bridlewood</option>
                            <option value="br33">Centennial</option>
                            <option value="br34">City Hall</option>
                            <option value="br35">College/Shaw</option>
                            <option value="br36">Danforth/Coxwell</option>
                            <option value="br37">Dawes Road</option>
                            <option value="br38">Deer Park</option>
                            <option value="br39">Dufferin/St. Clair</option>
                            <option value="br40">Eglinton Square</option>
                            <option value="br41">Evelyn Gregory</option>
                            <option value="br42">Forest Hill</option>
                            <option value="br43">Fort York</option>
                            <option value="br44">Gerrard/Ashdale</option>
                            <option value="br45">High Park</option>
                            <option value="br46">Jane/Dundas</option>
                            <option value="br47">Jane/Sheppard</option>
                            <option value="br48">Jones</option>
                            <option value="br49">Leaside</option>
                            <option value="br50">Locke</option>
                            <option value="br51">Main Street</option>
                            <option value="br52">Maryvale</option>
                            <option value="br53">Morningside</option>
                            <option value="br54">Mount Dennis</option>
                            <option value="br55">Oakwood</option>
                            <option value="br56">Palmerston</option>
                            <option value="br57">Port Union</option>
                            <option value="br58">Riverdale</option>
                            <option value="br59">Runnymede</option>
                            <option value="br60">Sanderson</option>
                            <option value="br61">Scarborough Civic Centre</option>
                            <option value="br62">St. Lawrence</option>
                            <option value="br63">Steeles</option>
                            <option value="br64">Thorncliffe</option>
                            <option value="br65">Weston</option>
                            <option value="br66">Woodside Square</option>
                            <option value="br67">Wychwood</option>
                            <option value="br68">Yorkville</option>
                            <option value="br69">Amesbury Park</option>
                            <option value="br70">Armour Heights</option>
                            <option value="br71">Bendale</option>
                            <option value="br72">Black Creek</option>
                            <option value="br73">Brookbanks</option>
                            <option value="br74">Burrows Hall</option>
                            <option value="br75">Cliffcrest</option>
                            <option value="br76">Davenport</option>
                            <option value="br77">Elmbrook Park</option>
                            <option value="br78">Guildwood</option>
                            <option value="br79">Highland Creek</option>
                            <option value="br80">Hillcrest</option>
                            <option value="br81">Humber Bay</option>
                            <option value="br82">Humber Summit</option>
                            <option value="br83">Humberwood</option>
                            <option value="br84">Kennedy/Eglinton</option>
                            <option value="br85">Long Branch</option>
                            <option value="br86">Mimico Centennial</option>
                            <option value="br87">Mount Pleasant</option>
                            <option value="br88">Northern Elms</option>
                            <option value="br89">Perth/Dupont</option>
                            <option value="br90">Pleasant View</option>
                            <option value="br91">Queen/Saulter</option>
                            <option value="br92">Rexdale</option>
                            <option value="br93">Spadina Road</option>
                            <option value="br94">St. Clair/Silverthorn</option>
                            <option value="br95">St. James Town</option>
                            <option value="Swansea Memorial">Swansea Memorial</option>
                            <option value="Taylor Memorial">Taylor Memorial</option>
                            <option value="Todmorden Room">Todmorden Room</option>
                            <option value="Victoria Village">Victoria Village</option>
                            <option value="Woodview Park">Woodview Park</option>
                        </select>
                    </span>


                    <label for="selector__program">Program Type</label>
                    <span className="selector">
                        <select className="selector__program" name="options" id="selector-program" value={this.state.program} onChange={this.handleChangeProgram}>
                            <option value="none">None</option>
                            <option value="Cultural">Cultural</option>
                            <option value="User Education">User Education</option>
                            <option value="Literary">Literary</option>
                            <option value="Literacy">Literacy</option>
                        </select>
                    </span>

                    <label for="selector__time">Time</label>
                    <span className="selector">
                        <select className="selector__time" name="options" id="selector-time" value={this.state.time} onChange={this.handleChangeTime}>
                            <option value="none">None</option>
                            <option value="9:00am - 12:30pm">9:00am - 12:30pm</option>
                            <option value="12:30pm - 3:30pm">12:30pm - 3:30pm</option>
                            <option value="3:30 - 6:00pm">3:30 - 6:00pm</option>
                            <option value="12:30p - 3:30pm">12:30p - 3:30pm</option>
                        </select>
                    </span>

                    <input className="button" type="submit" value="SUBMIT" />

                </form>

        );
      }
}

export default Filters;
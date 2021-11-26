import React, { Component } from "react";
import axios from "axios";
//import { Button } from 'react-bootstrap';
import "./Registration.css";
import { Link } from "react-router-dom";


class Registration extends Component {
  constructor() {
    super();
    this.state = {
      fullname: "",
      dob: "",
      roll_no: "",
      offline_online: "online",
      subjectcode: "",
      subjectname: "",
      seats: null,
    };
    this.changeFullname = this.changeFullname.bind(this);
    this.changeDob = this.changeDob.bind(this);
    this.changeRoll = this.changeRoll.bind(this);
    this.changeOfflineonline = this.changeOfflineonline.bind(this);
    this.changeSubjectcode = this.changeSubjectcode.bind(this);
    this.changeSubjectname = this.changeSubjectname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  changeFullname(event) {
    this.setState({
      fullname: event.target.value,
    });
  }
  changeDob(event) {
    this.setState({
      dob: event.target.value,
    });
  }
  changeRoll(event) {
    this.setState({
      roll_no: event.target.value,
    });
  }
  changeOfflineonline(event) {
    this.setState({
      offline_online: event.target.value,
    });
  }
  changeSubjectcode(event) {
    this.setState({
      subjectcode: event.target.value,
    });
  }
  changeSubjectname(event) {
    this.setState({
      subjectname: event.target.value,
    });
  }
  onSubmit(event) {
    event.preventDefault();
    console.log(this.state);

    // Add vaildation for all state here

    //
    //
    //
    //
    //
    //
    //
    //
    //

    //
    const { seats, offline_online } = this.state;
    if (this.state.seats === null) {
      alert("First click on Find available seats");
      return;
    } else if (Object.keys(this.state.seats).length === 0) {
      alert("Invalid subject code");
      return;
    } else {
      if (seats.onlineseats <= 0 && offline_online === "online") {
        alert("Sorry! No online seats available");
        return;
      } else if (seats.offlineseats <= 0 && offline_online === "offline") {
        alert("Sorry! No offline seats available");
        return;
      }
    }

    const data = {
      fullname: this.state.fullname,
      dob: this.state.dob,
      roll_no: this.state.roll_no,
      offline_online: this.state.offline_online,
      subjectcode: this.state.subjectcode,
      subjectname: this.state.subjectname,
    };
    axios
      .post("https://hidden-citadel-09649.herokuapp.com/api/usermodel1", data)
      .then((response) => {
        console.log(response);
        if (response.hasOwnProperty("message")) {
          alert("Invalid subject code");
          return;
        }
        const registered = {
          id: response.data._id,
          offline_online: this.state.offline_online,
          subjectcode: this.state.subjectcode,
        };
        console.log(registered);
        axios
          .post("https://hidden-citadel-09649.herokuapp.com/api/usermodel1/collections", registered)
          .then((res) => {
            console.log(res.data);
            if(res.data.hasOwnProperty("message")){
              alert("User already registered for the given subject")
            }
            this.setState({
              fullname: "",
              dob: "",
              roll_no: "",
              offline_online: "online",
              subjectcode: "",
              subjectname: "",
              seats: null,
            });
          });
      });
  }
  onChange() {
    //console.log("xyz");
    const blogs = {
      subjectcode: this.state.subjectcode,
    };
    axios
      .post("https://hidden-citadel-09649.herokuapp.com/api/usermodel2/seats", blogs)
      .then((response) => this.setState({ seats: response.data }));
  }

  loadAvailableSeats() {
    const { seats } = this.state;
    if (seats === null) {
    } else if (Object.keys(seats).length === 0) {
    } else {
      return (
        <div>
          <p>Avaliable Seats : {seats.availableseats}</p> <br></br>
          <p>Online Seats : {seats.onlineseats}</p> <br></br>
          <p>Offline Seats : {seats.offlineseats}</p> <br></br>
        </div>
      );
    }
  }
  render() {
    //console.log(this.state.seats)
    return (
      <div>
        <article className="dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
          <main className="pa4 black-80">
            <div className="measure center">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0"><h1><u>Registration For Students</u></h1></legend>
                <br/>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="full-name">
                    Full Name
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="name"
                    placeholder="FullName"
                    onChange={this.changeFullname}
                    value={this.state.fullname}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="date-of-birth">
                    Date-of-Birth
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="date"
                    placeholder="DOB"
                    onChange={this.changeDob}
                    value={this.state.dob}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="Roll-Number">
                    Roll Number
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="number"
                    placeholder="Roll-no"
                    onChange={this.changeRoll}
                    value={this.state.roll_no}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="subject-code">
                    Subject Code
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="subjectcode"
                    placeholder="subjectcode(Only Char)"
                    onChange={this.changeSubjectcode}
                    value={this.state.subjectcode}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <br />
                  <button variant="dark" onClick={this.onChange}>
                    Find Avaliable Seats
                  </button>
                  {this.loadAvailableSeats()}
                </div>
                <div className="mv3">
                  <select
                    className="b pa2 input-reset bg-transparent hover-bg-black  w-100"
                    onChange={this.changeOfflineonline}
                    value={this.state.offline_online}
                  >
                    <option
                      className="db fw6 lh-copy f6"
                      htmlFor="offline/online"
                    >
                      Online
                    </option>
                    <option
                      className="db fw6 lh-copy f6"
                      htmlFor="offline/online"
                    >
                      Offline
                    </option>
                  </select>
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="subject-name">
                    Subject Name
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="subjectname"
                    placeholder="subjectname"
                    onChange={this.changeSubjectname}
                    value={this.state.subjectname}
                  />
                </div>
              </fieldset>
              <div className="">
                <button onClick={this.onSubmit}>
                  {/*<input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" />*/}
                  Submit
                </button>
                &nbsp;&nbsp;&nbsp;
                < button type="submit">
                  <Link to = "/"  style={{ justifyContent: "space-between"}}>Back To HomePage</Link>
                </button>
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default Registration;

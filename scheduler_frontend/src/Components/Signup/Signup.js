import React, { Component } from "react";
import axios from "axios";
import "./Signup.css";
import { withRouter } from "react-router";
//import Classinfo from '../ClassInfo';
import { Link } from "react-router-dom";
//import {Button} from "react-bootstrap"
 
class Signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      subjectcode: "", 
      subjectname: "",
      isDisabled:true,
      emailError:false, 
      passwordError:false
    };
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
    this.changeSubjectcode = this.changeSubjectcode.bind(this);
    this.changeSubjectname = this.changeSubjectname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.validateEmail=this.validateEmail.bind(this);
  }
  validateEmail(email){
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const result = pattern.test(email);
    if(result===true){
      this.setState({
        emailError:false,
        email:email
      })
    } else{
      this.setState({ 
        emailError:true
      })
    }
  }

  changeEmail(event) {
   // console.log("hello")
   this.validateEmail(event.target.value)
    this.setState({
      email: event.target.value,
    
      
    });
  }
  changePassword(event) {
    if(event.target.value==='' || event.target.value===null){
      this.setState({
        passwordError:true
      })
    } else {
      this.setState({
        passwordError:false,
        password: event.target.value
      })
    }
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
    if(this.state.emailError === false && this.state.passwordError === false ){
      this.setState({
        isDisabled:false
        
      })
    }
  }
 
  onSubmit(event) {
    console.log("hello");
    event.preventDefault();

    const registered = {
      email: this.state.email,
      password: this.state.password,
      subjectcode: this.state.subjectcode,
      subjectname: this.state.subjectname,
    };
    axios
      .post("https://hidden-citadel-09649.herokuapp.com/api/usermodel", registered)
      .then((response) => {
        console.log(response.data);
      
      this.props.history.push("/classinfo/" + this.state.subjectcode); 
        this.setState({
          email: "",
          password: "",
          subjectcode: "",
          subjectname: "",
        });
      });
  }


  render() {
    return (
      <div className="container">
        <article className="dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
          <main className="pa4 black-80">
            <div className="measure center">
              <fieldset id="sign_up" class="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0"><h1><u>SignUp For Teachers</u></h1></legend>
                <br/>
                <div class="mt3">
                  <label className="db fw6 lh-copy f6" for="email-address">
                    Email
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="email"
                    placeholder="email"
                    onChange={this.changeEmail}
                    value={this.state.email}
                  />
                   {this.state.emailError ? <span style={{color: "red"}}>Please Enter valid email address</span> : ''}
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" for="password">
                    Password
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="password"
                    placeholder="password"
                    onChange={this.changePassword}
                    value={this.state.password}
                  />
                  {this.state.passwordError ? <span style={{color: "red"}}>Please enter some value</span> : ''}
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" for="subject-code">
                    Subject Code
                  </label>
                  <input
                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                    type="subjectcode"
                    placeholder="subjectcode(Only Char)"
                    onChange={this.changeSubjectcode}
                    value={this.state.subjectcode}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" for="subject-name">
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
                <button  onClick={this.onSubmit}>
              {/* <Link to={"/classinfo/" + this.state.subjectcode}> */}
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

export default withRouter(Signup);
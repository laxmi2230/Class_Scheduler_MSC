import axios from 'axios';
import React,{useState, useEffect} from 'react'
//import axios from 'axios';
//import { useLocation } from 'react-router-dom'
//import { useParams } from 'react-router-dom'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";



const Classinfo = (props) => {
   //const [i,setInfo]=useState([]);
   //const [loading,setLoading]=useState(true); 
   //const location = useLocation()
   //const { subjectcode } = useParams()
   const [posts,setPosts] = useState([]);
  // const { from } = location.state
  //const { subjectcode } = location.state
    
  useEffect(()=>{
 const infos = {
  subjectcode:props.match.params.subjectcode
  };
  axios.post('https://hidden-citadel-09649.herokuapp.com/api/usermodel1/info',infos)
                            .then(response => {
                              setPosts(response.data);
                            }).catch(error => {
                              console.error('Something went wrong!', error);
                            });
  }, []);
  const useaxiosPosts = posts.map((students)=>{
    return <div className="table-responsive"> 
       {/* <h3>{students.fullname}</h3>
         <h3>{students.offline_online}</h3> */}
  <Table striped bordered hover variant="dark" responsive>
  <thead>
    <tr>
      <th>Students Name</th>
      <th>Date of Birth</th>
      <th>Offline/Online</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{students.fullname}</td>
      <td>{students.dob}</td>
      <td>{students.offline_online}</td>
    </tr>
  </tbody>
   </Table>
    </div>
  })


    return (
        <div>
           {posts  && useaxiosPosts}
           < button type="submit">
                  <Link to = "/"  style={{ justifyContent: "space-between"}}>Back To HomePage</Link>
           </button>
        </div>
    )
}

export default Classinfo


























































/*//import axios from 'axios';
import React, { Component } from "react";
import axios from "axios";
//import Signup from './Signup/Signup';

class ClassInfo extends Component {
  constructor() {
    super();
    this.state = {
      subjectcode: this.props.location.subjectcode,
      Info: null,
      loading: true,
    };
    // this.onSubmit=this.onSubmit.bind(this)
  }

  componentDidMount() {
    const infos = {
      subjectcode: this.props.subjectcode,
    };
    axios
      .post("http://localhost:3001/api/usermodel1/info", infos)
      .then((response) => this.setState({ Info: response.data,loading:false }));
  }

  loadInfo = data => (
        data.length > 0 && data.map((student,i) => (
            <p key={i} >
              {student.fullname}
              </p>
        ))
    )
  render() {
    return (
     <div>
      {/* {this.state.loading?<p>Loading</p>:this.loadInfo(this.state.Info)}
        Hello 
       <p>{this.state.subjectcode}</p> 
      </div>
    );
  }
}
*/

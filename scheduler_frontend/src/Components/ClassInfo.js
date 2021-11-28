import axios from 'axios';
import React,{useState, useEffect} from 'react'
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";



const Classinfo = (props) => {
   
   const [posts,setPosts] = useState([]);
  
   
   
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



























































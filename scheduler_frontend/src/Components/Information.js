import React from 'react';
import { Table } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from './NavBar/NavBar';
import { Link } from 'react-router-dom';


const Information = () => {
    return (
  <div>
  <NavBar/>
  <br/>
  <h1 style={{textAlign:"center"}}>Subject Information</h1>
  <Table striped bordered hover variant="dark" responsive>
    <br/>
  <thead>
    <tr>
      <th>Subject Code</th>
      <th>Subject Name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CS1601</td>
      <td>OOPs</td>
    </tr>
    <tr>
      <td>CS1602</td>
      <td>DBMS</td>  
    </tr>
    <tr>
      <td>CS1603</td>
      <td>Data Structure</td>
    </tr>
    <tr>
      <td>CS1604</td>
      <td>Artificial Intelligence</td>
    </tr>
    <tr>
      <td>CS1605</td>
      <td>Internet of Things</td>
    </tr>
  </tbody>
  </Table>

  <br/>

  <h1 style={{textAlign:"center"}}>Teacher Credentials</h1>
  <Table striped bordered hover variant="dark" responsive>
  <br/>
  <thead>
    <tr>
      <th>Name</th>
      <th>Subject Code</th>
      <th>Email-id</th>
      <th>password</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Teacher1</td>
      <td>CS1601</td>
      <td>teacher1@gmail.com</td>
      <td>abc</td>  
    </tr>
    <tr>
      <td>Teacher2</td>
      <td>CS1602</td>
      <td>teacher2@gmail.com</td>
      <td>def</td> 
    </tr>
    <tr>
      <td>Teacher3</td>
      <td>CS1603</td>
      <td>teacher3@gmail.com</td>
      <td>ghi</td>
    </tr>
    <tr>
      <td>Teacher4</td>
      <td>CS1604</td>
      <td>teacher4@gmail.com</td>
      <td>jkl</td>
    </tr>
    <tr>
      <td>Teacher5</td>
      <td>CS1605</td>
      <td>teacher5@gmail.com</td>
      <td>mno</td>
    </tr>
  </tbody>
  </Table>

  <br/>

  <h1 style={{textAlign:"center"}}>Code and Timing (Week Wise[9AM-5PM])</h1>
  <Table striped bordered hover variant="dark" responsive>
    <br/>
  <thead>
    <tr>
      <th>Subject Code</th>
      <th>Timing(IST)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>CS1601</td>
      <td>9:00AM - 10:00AM</td>
    </tr>
    <tr>
      <td>CS1602</td>
      <td>10:30AM - 11:30AM</td>  
    </tr>
    <tr>
      <td>CS1603</td>
      <td>12:00PM - 13:00PM</td>
    </tr>
    <tr>
      <td>CS1604</td>
      <td>14:00PM - 15:00PM</td>
    </tr>
    <tr>
      <td>CS1605</td>
      <td>15:30PM - 16:30PM</td>
    </tr>
  </tbody>
  </Table>
  <button>
    <Link to="/">Back To Home Page</Link>
  </button>
  </div>
    )
}

export default Information

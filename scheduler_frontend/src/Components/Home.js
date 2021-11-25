import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap'; 
import NavBar from './NavBar/NavBar'
import Banner from './Banner';
import Footer from '../Components/Footer/Footer'


const Home = () => {
    return (
        <div>
            <NavBar/>
            <br/>
            <Banner/>
            <br/>
            <ul>
           <li> <p><b>Information of Class Timings, Subject Code/Name and Teachers alloted to particular Subject.</b>  &nbsp;&nbsp;&nbsp;
            <Button variant="dark">
            <Link
              to="/Information"
            >
            Class Information
           </Link> 
            </Button></p></li>
            <li><p><b>Signup For Teachers Based on Their Credentials and Subjects provided in Class Information Page.</b>  &nbsp;&nbsp;&nbsp;
            <Button variant="dark">
            <Link
              to="/Signup"
            >
            Sign up 
           </Link> 
           </Button></p></li>
           <li><p><b>Registration For Students Based on Subject Codes and Class Timings </b> &nbsp;&nbsp;&nbsp;  
           <Button variant="dark">
            <Link
              to="/Registration"
            >
             Registration
           </Link> 
            </Button>
           </p></li>
           </ul>
          <h4><b>For More information Please - </b></h4>  <Link to = "/About"><h3>Click Here</h3></Link>
          <br/>
          &nbsp;&nbsp;&nbsp;
          <u><i><h1><b>NOTE :</b></h1></i></u><h2>Expand the three bars on Navbar for direct visit to other pages!!!</h2>
          <Footer/>
        </div>
    )
}

export default Home;

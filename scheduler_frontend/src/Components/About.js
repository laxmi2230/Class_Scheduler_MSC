import React from 'react'
import NavBar from './NavBar/NavBar'
import { Link } from 'react-router-dom'
import Footer from './Footer/Footer'


const About = () => {
    return (
        <div>
        <NavBar/>
        
         <h1><u>About Website</u></h1>
         <p><b>Class Scheduler is a Scheduling website designed for "CSE Department" where the features allows the students to submit their weekly preferences for attending class personally/remotely. It also assigns available seats to students to choose their preference of attending class and it also provides the faculty with a roster of who has been cleared to attend the class.</b></p>
         <ul>
           <h4><b>Key Points -</b></h4>
           <b>
           <li>This Portal is completely handled by Admin, Timings of class will be changed by Admin week wise.</li>
           <li>Teachers have to enter the same credentials provided to them or else they will not be allowed to proceed further.</li>
           <li>Students also have to enter same subject code given in Class information Page or else they will not be allowed to register themselves.</li>
           <li>Students have to click on "Find Available Seats" after providing Subject Code or else they will not be able to proceed further.</li>
           </b>
         </ul>
         <h1>IMP!!</h1><b><u>Do check Class Information Page Before Proceeding.</u> Below is the Link--<Link to = "/Information"><h4>Class Information</h4></Link></b>
         <br/>
         <h1><u>Brief Details -</u></h1>
         <br/>
         <h1><b><u><i>For Teachers :</i></u></b></h1>
         <ul>
            <b> <li>Teachers have been provided with their respective Email-id's and Password to SignUp .</li>
             <li>After SignUp, they will be able to view Student's Detail as per the particular Subject Code's.</li>
             <li>Students Details involves,
                <ul> 
                <li>Names</li>
                <li>Date of Birth</li>
                <li>Chosen Online/Offline Seats</li>
                </ul>
            </li> </b>
         </ul>
         <h1><b><u><i>For Students :</i></u></b></h1>
         <ul>
            <b><li>Students have to register themselves with details as -
                <ul> 
                <li>Names</li>
                <li>Date of Birth</li>
                <li>Roll Number</li>
                <li>Subject Code</li>
                <li>Online/Offline(based on their choice</li>
                <li>Subject Name</li>
                </ul>
                <li>Student's have to click on "Find available Seats" after entering the Subject Code to know the-
                <ul>
                    <li>Available Seats</li>
                    <li>Online Seats</li>
                    <li>Offline Seats</li>
                </ul>
                </li>
             <li>After Registering themselves to a particular Subject Code, they will be allowed to attend class according to thei given preferences.</li>
            </li></b>
         </ul>
         <h1><b><u><i>Class Information :</i></u></b></h1>
         <ul>
            <b><li>Class Information includes -
                <ul> 
                <li>Subject Information</li>
                <ul>
                    <li>Subject Code</li>
                    <li>Subject Name</li>
                </ul>
                <li>Teacher's Information</li>
                <ul>
                    <li>Name</li>
                    <li>Subject Code</li>
                    <li>Email Address</li>
                    <li>Password</li>
                </ul>
                <li>Class Schedule Timing(Week Wise)</li>
                <ul>
                    <li>Subject Code</li>
                    <li>Timing's</li>
                </ul>
               </ul>
            </li></b>
         </ul>
         <button>
         <Link to="/">Back To Home Page</Link>
         </button>
        <Footer/>
        </div>
    )
}

export default About

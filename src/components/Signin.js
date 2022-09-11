import React,{useState,useEffect}from 'react';
import '../Join.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {  Alert } from "react-bootstrap";
import { Link,useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import axios from 'axios';
import signin from '../signin.jpg';
function Signin() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { logIn,passwordReset,user } = useUserAuth();

  const navigate = useNavigate();
 
  

  

  const handleBS = async (e) => {
    e.preventDefault();
    setError("");
    try {
    
      await axios.get('https://peaceful-springs-81849.herokuapp.com/retrieveBuyer/'+email).then((res)=>{
       
       
        
        localStorage.setItem("buyer",JSON.stringify(res.data));
       
      
        console.log(res.data[0].email)
        if(email===res.data[0].email)
        {
           logIn(email,password)
           navigate("/buyhp");
        }
        else{
          alert("incorrect buyer email/password")
        }
    
    }
      
      )
  
 
  //  await logIn(email, password);
   // navigate("/buyhp");
  
  
      
    } catch (err) {
      setError(err.message);
      alert("Incorrect buyer email or password");
    }
    
  };
  const handleSS = async (e) => {
    e.preventDefault();
    setError("");
    try {
    
      await axios.get('https://peaceful-springs-81849.herokuapp.com/retrieveSellers/'+email).then((res)=>{
       
        
        console.log(res.data);
        localStorage.setItem("seller",JSON.stringify(res.data));
       
       if(email===res.data[0].email)
       {
        logIn(email, password);
      navigate("/selld");
       }
       
        
     
    }
      
      )
     
  
    
    //  await logIn(email, password);
    //  navigate("/selld");
    
   
      
    
     
      
    } catch (err) {
      setError(err.message);
      alert("Incorrect seller email or password");
    }
    
  };
  const passreset = async (e) => {
    e.preventDefault();
    setError("");
    try {
      
      await passwordReset(email);
      navigate("/signin")
      
    } catch (err) {
      setError(err.message);
      
    }
    
  };

  
  
  
  
  
  return (
   
    <div className='p-5'>
            <div className='bjcont'>
            <div className= "d-flex gap-3 m-5">
    
            <div>
              <img src={signin} width="600px" height="450px" className='sbs'/>
            </div>
            <div className= "col-sm-6 ">
            {error && <Alert variant="danger">{error}</Alert>}
            <form className="aform">
            <div>
            <h1 id='jhead'>Sign In</h1>
            </div>

        <div className="mb-3 p-3">
          <input type="email" className="form-control" placeholder="Enter email address" required onChange={(e) => setEmail(e.target.value)}/>
        </div>


        <div className="mb-3 p-3">
          <input type="password" className="form-control" placeholder="Enter your password" required  onChange={(e) => setPassword(e.target.value)}/>
        </div>
       
        <div className="d-grid">
          
          
          <Button type="submit" onClick={handleBS} variant="default" className="subtn">
            Sign In As Buyer
          </Button>
          <Button type="submit" onClick={handleSS}  variant="default" className="subtn">
            Sign In As Seller
          </Button>
         
        </div>
        <p className="forgot-password text-center">
        <span> <input type="checkbox" style={{width:50}}/>
        Remember Me</span>&nbsp; &nbsp;<Button onClick={ passreset} variant="default" id="sibtn" >Forgot Password?</Button>
        </p>
        <footer>
       <p> Not a member yet? <Link to="/"><Button variant="default" id="jbtn" >Join Now</Button></Link>
        </p>
        </footer>
      </form>
      </div>
            </div>
            </div>
            </div>
            
        
  
   
  )
}

export default Signin;
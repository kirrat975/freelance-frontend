import React,{useState}from 'react';
import '../Join.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Alert } from 'react-bootstrap';
import { Link,useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

import axios from 'axios';

import join from '../join.jpg';

function Bjoin() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [name, setuname] = useState("");
  const [address, setaddr] = useState("");
  const [phone, setmnum] = useState("");
  const { signUp } = useUserAuth();
  
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    
    e.preventDefault();
    
    setError("");
    try {
      const register={
      email:email,
      password:password,
      address:address,
      name:name,
      phone:phone,
      }
      axios.post('https://peaceful-springs-81849.herokuapp.com/registerBuyer', register).then((res)=>{
        console.log(res.data);
       alert("signup sucessfully")
      })
      await signUp(email, password);

      navigate("/signin");
    } catch (err) {
      setError(err.message);
    }
  };
  
  
  return (
   
            <div className='p-5'>
            <div className='bjcont'>
            <div className= "d-flex gap-3 m-5">
            <div>
              <img src={join} width="600px" height="540px" className='sbs'/>
            </div>
            <div className='col-sm-6'>
            
            {error && <Alert variant="danger">{error}</Alert>}
            <form onSubmit={handleSubmit} className="aform">
            <div>
            <h1 id='jhead'>Join As Buyer</h1>
            </div>
            
        <div className="mb-3 p-2">
          <input type="text" value={name} className="form-control" placeholder="Enter username" required onChange={(e) => setuname(e.target.value)} />
        </div>

        <div className="mb-3 p-2">
          <input type="email" value={email} className="form-control" placeholder="Enter email address" required onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="mb-3 p-2">
          <input type="number" value={phone} className="form-control" placeholder="Enter your mobile number" required onChange={(e) => setmnum(e.target.value)} />
        </div>

        <div className="mb-3 p-2">
          <input type="text" value={address} className="form-control" placeholder="Enter your address" onChange={(e) => setaddr(e.target.value)}/>
        </div>

        <div className="mb-3 p-2">
          <input type="password"  value={password} className="form-control" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)}/>
        </div>
       
        <div className="d-grid ">
          <Button type="submit" variant="default" className="subtn">
            Sign Up
          </Button>
        </div>
        <p className="forgot-password text-center">
          Already registered      <Link to="/signin">  <Button variant="default" id="sibtn" >Sign In?</Button></Link>
        </p>
      </form>
      </div>
            </div>
            </div>
            </div>
          
            
        
  
   
  )
}

export default Bjoin;
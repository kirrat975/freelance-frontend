import React from 'react';
import './Sellerdash.css';
import { Link,useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

function Sheader() {
    const navigate=useNavigate();
    const { logOut} = useUserAuth();
    const handleSLogout=async()=>{
        try {

            await logOut();
           localStorage.removeItem("seller");
          
            navigate("/");
          } catch (error) {
            console.log(error.message);
          }
      };
  return (
    <div>
         <header>
            <nav className='navbar'>
            <Link to="/"></Link>
            <ul>
                
                 <li><button onClick={()=>navigate('/selld')}>Buyer Requests</button></li>
                <li><button  onClick={()=>navigate('/selord')}>Orders</button></li>
                <li><button  onClick={()=>navigate('/seprof')}>Profile</button></li>
                <li><button onClick={()=>navigate('/set')}>Settings</button></li>
                <li><button onClick={()=>navigate('/billsel')}>Billing</button></li>
                <li><button onClick={handleSLogout}>Logout</button></li>
             
            </ul>
            </nav>
        </header>
    </div>
  )
}

export default Sheader;
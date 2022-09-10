import React from 'react';
import { Link,useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";


function Bheader() {
    const navigate=useNavigate();
    const { logOut} = useUserAuth();
    const handleLogout=async()=>{
        try {

            await logOut();
           localStorage.removeItem("buyer");
            navigate("/");
          } catch (error) {
            console.log(error.message);
          }
      };
  return (
    <div>
        <div>
        <header>
            <nav className='navbar'>
            <Link to="/"></Link>
            <ul>
                <li><button onClick={()=>navigate('/buyhp')}>Dashboard</button></li>
                <li><button onClick={()=>navigate('/postpr')}>Post a Request/Job</button></li>
                <li><button onClick={()=>navigate('/bidman')}>Manage Requests</button></li>
                <li><button onClick={()=>navigate('/bmord')}>My Orders</button></li>
                <li><button onClick={()=>navigate('/buprof')}>Profile</button></li>
                <li><button onClick={()=>navigate('/set')}>Settings</button></li>
                <li><button onClick={()=>navigate('/billby')}>Billing</button></li>
                <li><button onClick={handleLogout}>Logout</button></li>
               
            </ul>
            </nav>
        </header>
        </div>
    </div>
  )
}

export default Bheader;
import {React,useState,useEffect }from 'react';
import './BuyerHp.css';
import { Link,useNavigate} from "react-router-dom";
import {Container,Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import StarRatings from 'react-star-ratings';
import { useUserAuth } from "../context/UserAuthContext";
import cardavatar from '../cardavatar.jpg';
import axios from "axios";
function BuyerHp() {
    const [Suserdata, setSUserData] = useState([]);
    const Surl = "http://localhost:9999/retrieveSellers";
    const { logOut, user } = useUserAuth();
    const navigate=useNavigate();

    useEffect(() => {
        getSeller();
      }, []);
    
      const getSeller = async () => {
        const response = await axios.get(Surl);
        setSUserData(response.data);
       
      };

      const handleLogout=async()=>{
        try {

          await logOut();
          localStorage.removeItem("buyer");
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      }
     
  return (
    <div className='p-4'>
       
        <div>
        <h1 className='bhpg'>Buyer HomePage</h1>
        <header>
            <nav className='navbar'>
            <Link to="/"></Link>
            <ul>
                <li><button>Dashboard</button></li>
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
        <div>
        <h1 id="lserv">Services you may like <i className="fa-solid fa-thumbs-up"></i></h1>
        <Container className=''>
                  <Col className='cardcont'>
                     {Suserdata.map(data=>(
                        <Card className='mcard' style={{ width: '20rem'}} key={data.id}>
      <Card.Img variant="top" src={cardavatar} />
      <Card.Body>
      <hr/>
        <Card.Title><h1 id='uname'>{data.name}</h1></Card.Title>
        <Card.Text>
          <div>
          
            <h2 id="service">{data.service}</h2>
            <StarRatings rating={data.rating} starRatedColor="yellow" starDimension="30px"  numberOfStars={5} />
           <h5>{data.orders}</h5>
            <p id="pmail">{data.email}</p>
            
            
          </div>
        </Card.Text>
      
      </Card.Body>
    </Card>


    ))}
   
    </Col>

    </Container>
        </div>
    </div>
  )
}

export default BuyerHp;
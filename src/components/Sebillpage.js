import {React ,useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import './Billing.css';
import axios from "axios";
import Sheader from './Sheader';

function Sebillpage() {
    const order=JSON.parse(localStorage.getItem("order"));
   

    const seller=JSON.parse(localStorage.getItem("seller"));
    const selname=seller.map(x=>x.name);
    
    const [Suserdata, setSUserData] = useState([]);

   

    useEffect(() => {
       
        getSellerO()
      
      }, []);
      const getSellerO = async () => {
       
     
        await axios.get("https://peaceful-springs-81849.herokuapp.com/retrieveOrders/"+order.email).then((response)=>{
         console.log(response.data);
        setSUserData(response.data);
         

           
        });
    }
   
      


  return (
    <div className='p-4'>
    <Sheader/>
    <div className='billcont'>
    <Card className='billcard' style={{ width: '600px'}} >
  
  <Card.Body>
  <hr/>
    <Card.Title>
     <h1 id='billname'>Seller Reciept</h1>
        
    </Card.Title>
    <Card.Text>
      <div className='cardtab'>
     <table className='billtab'>
      
        <tr>
            <td>Seller Name</td>
            <td>{selname[0]}</td>
        </tr>
        </table>
        {Suserdata.map(dat=>(
          <table className='billtabi'>
          <tr>
            <td>Buyer Id</td>
            <td>{dat.buyerId}</td>
        </tr>
        <tr>
            <td>Project Title</td>
            <td>{dat.title}</td>
        </tr>
        <tr>
            <td>Order Status</td>
            <td>{dat.status}</td>
        </tr>
        <tr>
            <td>Duration</td>
            <td>{dat.duration}</td>
        </tr>
        <tr>
            <td>Amount given</td>
            <td>{dat.price}</td>
        </tr>
     </table>
        ))}
        
        
      </div>
    </Card.Text>
  
  </Card.Body>
</Card>
   
      
        </div>
    </div>
  )
}

export default Sebillpage;
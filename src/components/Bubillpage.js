import {React ,useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import './Billing.css';
import axios from "axios";
import Bheader from './Bheader';

function Bubillpage() {
    const order=JSON.parse(localStorage.getItem("order"));

   
    const buyer=JSON.parse(localStorage.getItem("buyer"));
    const byname=buyer.map(x=>x.name)

    const [Suserdata, setSUserData] = useState([]);
    const [Sordata, setSordata] = useState([]);

  

    useEffect(() => {
        getOrder();
      
        getSeller()
      
      }, []);
      const getSeller = async () => {
       
     
        await axios.get("http://localhost:9999/retrieveSellers/"+order.email).then((response)=>{
         console.log(response.data);
         setSUserData(response.data);
         
         

           
        });
    }
   console.log()
      const getOrder = async () => {
       
     
        await axios.get("http://localhost:9999/retrieveOrders/"+order.email).then((response)=>{
         console.log(response.data);
      
         setSordata(response.data)

           
        });
    }

   


  return (
    <div className='p-5'>
    <Bheader/>
    <div className='billcont'>
    <Card className='billcard' style={{ width: '600px'}} >
  
  <Card.Body>
  <hr/>
    <Card.Title>
     <h1 id='billname'>Buyer Reciept</h1>
        
    </Card.Title>
    <Card.Text>
      <div className='cardtab'>
      {Suserdata.map(data=>(
        <table className='billtab'>
        <tr>
            <td>Buyer Name</td>
            <td>{byname[0]}</td>
        </tr>
        <tr>
            <td>Seller Name</td>
            <td>{data.name}</td>
        </tr>
        
    
     </table>
      ))}
     <div>
     {Sordata.map(dat=>(
      <table className='billtabi'>
        
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
        
      </div>
    </Card.Text>
  
  </Card.Body>
</Card>
   
      
        </div>
    </div>
  )
}

export default Bubillpage;
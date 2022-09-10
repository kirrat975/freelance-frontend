import {React ,useState,useEffect} from 'react';
import Bheader from './Bheader';
import './Manreq.css';
import axios from "axios";




function BmanageReq() {

    const [Suserdata, setSUserData] = useState([]);
   
    const buyer=JSON.parse(localStorage.getItem("buyer"));
    const buyerId=buyer.map(x=>x._id);
    const buyername=buyer.map(x=>x.name)
    const bidreq=JSON.parse(localStorage.getItem("bidrequest"));
   
   
    

    useEffect(() => {
        getProject();
        getBidRequest();
      }, []);
    
      const getProject = async () => {
       
     
        await axios.get("http://localhost:9999/retrieveProject/"+buyerId[0]).then((response)=>{
         
           
            setSUserData(response.data);
        });
        
       
      };

       const getBidRequest = async () => {
       
     
        await axios.get("http://localhost:9999/retrieveOrderRequest/" +bidreq._id).then((response)=>{
         
           
           
            console.log((response.data))
        });
        
       
      };

      const handleAceept=async ()=>{
        console.log(bidreq.sellerId);
        alert("Hello,"+buyername+"," +" \n To  confirm the order to seller with Id:" +bidreq.sellerId +" \n Click on order button in project section",1000)
      };
      const handleOrder=async (buyerId,title,description,category,duration,price)=>{
        const orderdata = {
            method: 'POST',
            url: 'http://localhost:9999/registerOrder',
            data: 
            
            {
                title,
                description,
                category,
                price,
                duration,
                sellerId:bidreq.sellerId,
                buyerId: buyerId,
                file:"",
              }
          };
          
          
          axios.request(orderdata).then(function (response) {
            console.log(response.data);
            localStorage.setItem("order",JSON.stringify(response.data))
            alert("Order created")
          }).catch(function (error) {
            console.error(error);
          });
         
      }

     
  return (
    <div>
    <div className='p-4'>
      <Bheader/>
        <h1>My Projects</h1>
        <div className='tabcont'>
        <table className='tabreq'>
                <thead>
                    <tr>
                        <th>Buyer Id</th>
                        <th>Project Id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>Category</th>
                        <th>Duration</th>
                        <th>Budget</th>
                        <th>Action</th>
                    
                    </tr>
                </thead>
                <tbody>
                {Suserdata.map(data=>(
                       <tr>
                        <td >{data.buyerId}</td>
                        <td >{data._id}</td>
                        <td>{data.title}</td>
                        <td>{data.description}</td>
                        <td>{data.category}</td>
                        <td>{data.duration}</td>
                        <td>Rs.{data.price}</td>
                        <td><button id="ordb" onClick={()=>{handleOrder(data.buyerId,data.title,data.description,data.category,data.duration,data.price);
                       }}>Order</button></td>
                       </tr>


    ))}
   
                </tbody>
            </table>
        </div>
        <div>
        <h1>Bid Requests</h1>
        <div className="tabcont">
        <table className='tabreq'>
                <thead>
                    <tr>
                        <th>Buyer Id</th>
                        <th>Seller Id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>Category</th>
                        <th>Duration</th>
                        <th>Price</th>
                        <th>Action</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                
                       <tr>
                        <td>{bidreq.buyerId}</td>
                        <td>{bidreq.sellerId}</td>
                        <td>{bidreq.title}</td>
                        <td>{bidreq.description}</td>
                        <td>{bidreq.category}</td>
                        <td>{bidreq.duration}</td>
                        <td>{bidreq.price}</td>
                        <td><button id="accb" onClick={()=>{handleAceept()}}>Accept</button></td>
                        
                        
                      
                       </tr>


   
   
                </tbody>
            </table>
        </div>
        </div>
        </div>
    </div>
  )
}

export default BmanageReq;
import {React ,useState,useEffect} from 'react';
import Bheader from './Bheader';
import {Modal, ModalFooter} from "react-bootstrap";
import './SBorder.css';

import axios from "axios";


function BuyerOrders() {
    const [Suserdata, setSUserData] = useState([]);
    const [SCodata, setScodata] = useState([]);

    const order=JSON.parse(localStorage.getItem("order"));

    const buyer=JSON.parse(localStorage.getItem("buyer"));

    const buyerId=buyer.map(x=>x._id);

   

    const [isOpen, setIsOpen] =useState(false);

    const [completed, setScomp] = useState(false);

    const [cancelled, setScan] = useState(false);

    const[checked,setCheck]=useState(false);

    const[rating,setRate]=useState("");
    
    const [data,setData] = useState({}); 
   

   
   
   
    useEffect(() => {
        getOrder();
       
      
      }, []);
    
      const getOrder = async () => {
       
     
        await axios.get("https://peaceful-springs-81849.herokuapp.com/retrieveOrders/"+order.email).then((response)=>{
         

          
        console.log(response.data);
      
        
            setSUserData(response.data);
        
        
        

           
        });
    }

   
  
    
    const handleSubmit= async (e)=> {
       e.preventDefault();
        
      if(cancelled==='Cancelled'){
        const updata1={
          status:cancelled,
          rating:0,
        };
        console.log(cancelled)
        await axios.put("https://peaceful-springs-81849.herokuapp.com/updateOrderStatus/"+data._id,updata1).then((res)=>{
          console.log(res.data)
          localStorage.setItem("updata",JSON.stringify(res.data))
          alert("status updated ")
        })
      }
      else if(completed==='Completed')
      {
      const updata2={

        status:completed,
        rating:rating,
      };
      await axios.put("https://peaceful-springs-81849.herokuapp.com/updateOrderStatus/"+data._id,updata2).then((res)=>{
        console.log(res.data);
        localStorage.setItem("updata",JSON.stringify(res.data))
        alert("status and rating are updated")
      })

      }

       setIsOpen(false);
          }


  return (
    <div>
        <div className='p-4'>
        <Bheader/>
        <h1>My orders</h1>
        <div className='botabcont'>
        <table className='tabordr'>
                <thead>
                    <tr>
                        <th>OrderId</th>
                        <th>Seller Id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>Category</th>
                        <th>Duration</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Update Status</th>
                       
                    
                    </tr>
                </thead>
                <tbody>
                {Suserdata.map(data=>(
                       <tr>
                        <td>{data._id}</td>
                        <td >{data.sellerId}</td>
                        <td>{data.title}</td>
                        <td>{data.description}</td>
                        <td>{data.category}</td>
                        <td>{data.duration}</td>
                        <td>Rs.{data.price}</td>
                        <td>{data.status}</td>
                        <td><button id="bsupd" onClick={()=>{setIsOpen(true);setData({_id:data._id})}}>Update status</button></td>

                       </tr>


    ))}
   
                </tbody>
            </table>
        
            </div>
            <Modal show={isOpen}>
        <Modal.Header>
          <Modal.Title>Submit Work</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <form className='swform' onSubmit={(e)=>{handleSubmit(e)}}>
            <div className='inmod'>
            <p>Are you satisfied with seller's order/delievered work?
            If yes tick on completed checkbox, and if no tick on cancelled checkbox.</p>
            <ul>
            <li>
            <label>Completed</label>
            <input type="checkbox" value="Completed" onChange={(e)=>{setScomp(e.target.value);setCheck(!checked)}} checked={checked}/>
            <div>
             {
                checked ? (
                <input type="number" id="inprate" value={rating} placeholder='Enter rating from 1 to 5 for seller' onChange={(e)=>setRate(e.target.value)}/>
               ) : (<div></div>)
             }

            

                
            </div>
            </li>
    
            <li><label>Cancelled</label>
            <input type="checkbox"  value="Cancelled" onChange={(e)=>setScan(e.target.value)} /></li>
            
            </ul>

          </div>
          <div>
          <button id="swbtn">Submit</button>
          </div>
        </form>
        
        </Modal.Body>
        <ModalFooter>
        <button onClick={()=>setIsOpen(false)}> Cancel</button>
        </ModalFooter>
      </Modal>
     
        </div>
    </div>
  )
}

export default BuyerOrders
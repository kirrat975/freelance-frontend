import {React ,useState,useEffect}from 'react';
import './Sellerdash.css';
import { Link,useNavigate} from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import {Modal} from "react-bootstrap";
import axios from 'axios';


function SellerDash() {
    const navigate=useNavigate();
    const [Suserdata, setSUserData] = useState([]);
    const { logOut} = useUserAuth();
    const [isOpen, setIsOpen] =useState(false);

    //for form
    const [title, setTitle] = useState("");

    const [description, setdescription] = useState("");

    const [category, setcategory] = useState("");
    
    const [price, setprice] = useState("");

    const [duration, setduration] = useState("");

    const seller=JSON.parse(localStorage.getItem("seller"));
    const sellerId=seller.map(x=>x._id);
    const [data,setData] = useState({}); 
    
   

    useEffect(() => {
        getProject();
      }, []);
    
      const getProject = async () => {
       
     
        await axios.get("http://localhost:9999/retrieveProjects/").then((response)=>{
          localStorage.setItem("projects",JSON.stringify(response.data))
           
            setSUserData(response.data);
        });
        
       
      };

     // onClick={()=>{handleBid(data.buyerId,data.title,data.description,data.category,data.duration,data.price)}}
    

    
     const handleBid=async(buyerId)=>{
      setIsOpen(true);
      
   
    }
    const handleSubmit=(e)=>{
      e.preventDefault();
      
      const options = {
        method: 'POST',
        url: 'http://localhost:9999/registerOrderRequest',
        data: {
            title,
            description,
            category,
            price,
            duration,
            sellerId:sellerId[0],
            buyerId: data.buyerId,
            projectId: data.projectId
          }
      };
      
      axios.request(options).then(function (response) {
        console.log(response.data);
        localStorage.setItem("bidrequest",JSON.stringify(response.data))
        alert("Bid Offer sent")
      }).catch(function (error) {
        console.error(error);
      });
      setIsOpen(false);
      setData({});
    }
   

      
     
      const handleSLogout=async()=>{
        try {

            await logOut();
           localStorage.removeItem("seller");
          
            navigate("/");
          } catch (error) {
            console.log(error.message);
          }
      }
     
      
  return (
   
    <div className='p-4'>
        <h1 id="sellh">Seller Dashboard</h1>
        <div>
       
        <header>
            <nav className='navbar'>
            <Link to="/"></Link>
            <ul>
                
                <li><button >Buyer Requests</button></li>
                <li><button  onClick={()=>navigate('/selord')}>Orders</button></li>
                <li><button  onClick={()=>navigate('/seprof')}>Profile</button></li>
                <li><button onClick={()=>navigate('/set')}>Settings</button></li>
                <li><button onClick={()=>navigate('/billsel')}>Billing</button></li>
                <li><button onClick={handleSLogout}>Logout</button></li>
             
            </ul>
            </nav>
        </header>
        </div>
        <div className='sdtab'>
    
            <table className='tabpro'>
                <thead>
                    <tr>
                        <th>Buyer Id</th>
                        <th>Project Id</th>
                        <th>Title</th>
                        <th>Description</th>
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
                       <td><button onClick={()=>{handleBid(data.buyerId);setData({buyerId: data.buyerId,projectId: data._id})}} id='bid'>BID</button></td>
                       </tr>


    ))}
   
                </tbody>
            </table>
            
            <Modal show={isOpen}>
        <Modal.Header>
          <Modal.Title>OFFER REQUEST</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <form className='modform' onSubmit={(e)=>{handleSubmit(e)}}>
            <div className='inmod'>
          <div className='mb-3'>
          <input type="text" value={title} placeholder='Enter your offer title' className='modinp' required onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div className='mb-3'>
            <textarea maxLength="2500" value={description} placeholder='I am going to offer....' id="modtexta" required onChange={(e) => setdescription(e.target.value)}></textarea>
          </div>
          <div>
          <select id='modsel' value={category} required onChange={(e) => setcategory(e.target.value)}>
                    <option  value="">Select...</option>
                    <option  value="Graphics and Design">Graphics & Design</option>
                    <option value="Digital Markting">Digital Marketing</option>
                    <option value="Writing & Translation" >Writing & Translation</option>
                    <option value="Video & Animation" >Video & Animation</option>
                    <option value="Music & Audio" >Music & Audio</option>
                    <option value="Programming & Tech" >Programming & Tech</option>
                    <option value="Data">Data</option>
                    <option  value="Business" >Business</option>
                    <option value="lifestyle">Lifestyle</option>
                    </select>
          </div>
          <div className='mb-3'>
           <input type="text" value={duration} placeholder='Enter your offer duration' className='modinp' required onChange={(e) => setduration(e.target.value)}/>
          </div>
          <div className='mb-3'>
           <input type="number" value={price} placeholder='Enter your offered price' className='modinp' required onChange={(e) => setprice(e.target.value)}/>
          </div>
          
          <div>
          <button type='submit' id='modsub' 
           >Submit</button>
          </div>
          </div>
        </form>
        
        </Modal.Body>
        
      </Modal>
        </div>
      
    </div>
  )
}

export default SellerDash;
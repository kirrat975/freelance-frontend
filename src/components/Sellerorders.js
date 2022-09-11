import {React ,useState,useEffect} from 'react';
import './SBorder.css';
import {Modal, ModalFooter} from "react-bootstrap";
import axios from "axios";
import Sheader from './Sheader';


function Sellerorders() {
    const [Suserdata, setSUserData] = useState([]);
    
    const seller=JSON.parse(localStorage.getItem("seller"));
    const selleremail=seller.map(x=>x.email);
 

   
   //const orderId=order.map(x=>x._id);
  
    const [isOpen, setIsOpen] =useState(false);
   // const [file, setFile] = useState();
   // const [fileName, setFileName] = useState("");
     
console.log(selleremail[0])
  
    useEffect(() => {
        getSemail();
       
      
      }, []);
    
      const getSemail = async () => {
       
     
        await axios.get("https://peaceful-springs-81849.herokuapp.com/retrieveOrders/"+selleremail[0]).then((response)=>{
         
       // localStorage.setItem("sellerorder",JSON.stringify(response.data))
          
        console.log(response.data);
      
        
            setSUserData(response.data);

           
        });
    }
   

  const handleSubmit= async (e)=> {

/*e.preventDefault()

const formData = new FormData();
formData.append("file", file);
formData.append("fileName", fileName);
localStorage.setItem("filename",fileName)
console.log(formData)

       
     try {
          const res = await axios.post(
            "http://localhost:9999/uploadOrderFile/"+data._id,
            formData
          ).then((res)=>{
            console.log(res.data);
            localStorage.setItem("file",JSON.stringify(res.data))
            alert("File is created")
          })
          console.log(res);
        } catch (ex) {
          console.log(ex);
        }
        setIsOpen(false);

        //
<form className='swform' onSubmit={(e)=>{handleSubmit(e)}}>
            <div className='inmod'>
         <input type="file" onChange={(e)=>{setFile(e.target.files[0]);setFileName(e.target.files[0].name);}}/>
          </div>
          <div>
          <button id="swbtn" type="submit"> Upload</button>
          </div>
        </form>
        //
*/

  }
  
  return (
    <div>
        
        <div className='p-4'>
        <Sheader/>
        <h1>Seller Orders</h1>
        <div className='sotab'>
        
        <table className='tabordr'>
                <thead>
                    <tr>
                        <th>Buyer Id</th>
                        <th>Seller Id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>Category</th>
                        <th>Duration</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Upload Work</th>
                       
                    
                    </tr>
                </thead>
                <tbody>
                {Suserdata.map(data=>(
                       <tr>
                        <td >{data.buyerId}</td>
                        <td >{data.sellerId}</td>
                        <td>{data.title}</td>
                        <td>{data.description}</td>
                        <td>{data.category}</td>
                        <td>{data.duration}</td>
                        <td>Rs.{data.price}</td>
                        <td>{data.status}</td>
                        <td><button id="bsupd" onClick={()=>{setIsOpen(true)}}>Upload Work</button></td>

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
        <p>Send your work to buyer's email address in order to get your project mark completed</p>
        
        
        </Modal.Body>
        <ModalFooter>
        <button onClick={()=>setIsOpen(false)}> Cancel</button>
        </ModalFooter>
      </Modal>
        </div>
    </div>
  )
}

export default Sellerorders;
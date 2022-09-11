import {React,useState} from 'react';
import './Postprj.css';
import Bheader from './Bheader';
import axios from 'axios';
function PostPR() {

    const [title, setTitle] = useState("");

    const [description, setdescription] = useState("");

    const [category, setcategory] = useState("");
    
    const [price, setprice] = useState("");

    const [duration, setduration] = useState("");
    
    const buyer=JSON.parse(localStorage.getItem("buyer"));
    const buyerid=buyer.map(x=>x._id);
  
    
       
       

    const handleSubmit = async (e) => {
        e.preventDefault();

        const registercat={
            name:category,
            description:description,
            price:price,
            duration:duration,
           
           }
         

        const registerp={
            title:title,
            description:description,
            category:category,
            price:price,
            duration:duration,
            buyerId:buyerid[0]
            
           }
           console.log(registerp);
           console.log(registercat);
    
           axios.all([
            axios.post('https://peaceful-springs-81849.herokuapp.com/registerProject',registerp), 
            axios.post('https://peaceful-springs-81849.herokuapp.com/registerCategory',registercat)
          ])
          .then(axios.spread((data1, data2) => {
           
            console.log('data1', data1, 'data2', data2)
            alert("Project and Category Successfully created")
          }));
        
        

      };

  return (
    <div>
   
    <div className='jcont p-4'>
        <Bheader/>
        <form className='joform' onSubmit={handleSubmit}>
        <h1 id="pj">Post a Job</h1>
           
            <div className='fjcont'>
            <h3 className="head-3">What Services Are you looking for?</h3>
                <div className='finner'>
                    <div className='pserv'>
                    <span>
                        <p>Describe the service you're looking to purchase - please be as detailed as possible:</p>
                    </span>
                    <div >
                      <label className='jlabel row'>Title of your service:</label>
                      <input id="nserv" value={title} type="text" placeholder='Name of my service' required onChange={(e) => setTitle(e.target.value)}></input>
                      <div>
                    <label className='jlabel row'>Description of your service:</label>
                    <textarea  value={description} id="txta" maxLength="2500" placeholder="I'm looking for...&nbsp;(0/2500)" required onChange={(e) => setdescription(e.target.value)}></textarea>
                      </div>
                    </div>
                    </div>
                </div>
                <div className='finner'>
                    <span><h3 className="head-3">Choose a Category</h3></span>
                   <label className='jlabel row'>Category: </label>
                   <select value={category} className="selcat" required onChange={(e) => setcategory(e.target.value)}>
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
                <div className='finner'>
                    <span><h3 className="head-3">Once you place your order, when would you like your service delivered?</h3></span>
                    <div>
                        <label className='jlabel row'>Duration of the project:</label>
                        
                        <label><input  value={duration} className='dur' type="text" placeholder='Duration of your project' required onChange={(e) => setduration(e.target.value)}/>
                        </label> 
                     
                       
                    </div>
                </div>
                <div className='finner'>
                    <span><h3 className="head-3">What is your budget for this service?</h3></span>
                    <label className='jlabel row'>Price:</label>
                    <input  value={price} id="pkr" type="number" placeholder='PKR' required onChange={(e) => setprice(e.target.value)}/>
                </div>
                <div>
                <button type='submit' className='sreq'>Submit Request</button>
                </div>
            </div>
           
        </form>
    </div>
    </div>
  )
}

export default PostPR;
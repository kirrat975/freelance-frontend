import {React,useEffect }from 'react';
import Card from 'react-bootstrap/Card';
import Bheader from './Bheader';
import buyer from '../buyer.png';
import './Buprofile.css';
import axios from 'axios';

function BProfile() {
    const buyerInfo=JSON.parse(localStorage.getItem('buyer'));
    
   
   useEffect(() => {
  
  
  }, []);

  
  return (
    <div>
      <div className='p-2 '>
      <Bheader/>
      <div className='bprof'>
      <h1 id='buid'>BUYER PROFILE</h1>
      {buyerInfo.map(buyerInfo=>(
                        <Card className='bcard' style={{ width: '600px'}} key={buyerInfo.id}>
      <Card.Img variant="top" src={buyer} width="150px" height="260px" />
      <Card.Body>
      <hr/>
        <Card.Title>
         <h1 id='bname'>User Name : {buyerInfo.name}</h1>
            
        </Card.Title>
        <Card.Text>
          <div className='cardtab'>
          <table className='bptab'>
          <thead>
          <tr>
            <th>Email Address</th>
            <th>Mobile Number</th>
            <th>Residential Address</th>
            </tr>
          </thead>
            <tbody>
            <tr>
               <td><span>{buyerInfo.email}</span></td>
                <td> <span>{buyerInfo.phone}</span></td>
                <td><span>{buyerInfo.address}</span></td>
                </tr>
            </tbody>
          </table>

        
            
            
          </div>
        </Card.Text>
      
      </Card.Body>
    </Card>


    ))}
   
      </div>
      </div>
     
    </div>
  )
}

export default BProfile;
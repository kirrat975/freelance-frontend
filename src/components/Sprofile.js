import React from 'react';
import Card from 'react-bootstrap/Card';
import Sheader from './Sheader';
import './Suprofile.css';
import seller from '../seller.png';

function Sprofile() {
    const sellerInfo=JSON.parse(localStorage.getItem('seller'));
  return (
    <div>
        <div className='p-2'>
        <Sheader/>
            <div className='bprof'>
      <h1 id='suid'>SELLER PROFILE</h1>
      {sellerInfo.map(sellerInfo=>(
                        <Card className='scard' style={{ width: '600px'}} key={sellerInfo.id}>
      <Card.Img variant="top" src={seller} width="150px" height="260px" />
      <Card.Body>
      <hr/>
        <Card.Title>
         <h1 id='sname'>User Name : {sellerInfo.name}</h1>
            
        </Card.Title>
        <Card.Text>
          <div  className='cardtab'>
          <table className='sptab'>
          <thead>
          <tr>
            <th>Email Address</th>
            <th>Mobile Number</th>
            <th>Residential Address</th>
            </tr>
          </thead>
            <tbody>
            <tr>
               <td><span>{sellerInfo.email}</span></td>
                <td> <span>{sellerInfo.phone}</span></td>
                <td><span>{sellerInfo.address}</span></td>
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

export default Sprofile;
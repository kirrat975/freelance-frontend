import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate} from "react-router-dom";

import logo from '../logo.png';
import andrea from '../andrea.png';
import moon from '../moon.png';
import ritika from '../ritika.png';
import zach from '../zach.png';
import gabrele from '../gabrele.png';
import Carousel from 'react-bootstrap/Carousel'; 
function Home() {
  const navigate=useNavigate();
  return (
    <div className='row-lg-6 align-items-center p-4'>
    <div className='hohead'>
    <header>
      <nav className="navbar navbar-light bg-dark p-1">
      <div className='hlogo'>
      <span id='flogo'>
      
  <a className="navbar-brand" href="#">
    <img src={logo} className='filogo'/>
  </a>
  </span>
  <h1>Freelance Marketplace</h1>
  </div>
  
  <Link to="/"></Link>
  <ul>

 <li><button   onClick={()=>navigate('/bjoin')}>Join as Buyer</button></li>
<li><button    onClick={()=>navigate('/sjoin')}>Join as Seller</button></li>
<li><button    onClick={()=>navigate('/signin')}>Sign In</button></li>
<li><button    onClick={()=>navigate('/policy')}>Private Policy</button></li>
<li><button    onClick={()=>navigate('/ftos')}>Terms Of Services</button></li>


</ul>
 
</nav>
</header>
    </div>
   <div className='p-4'>
   <h1 className='topf'>Top Freelancers</h1>
  <div className='car-cont'>
  <Carousel>
      <Carousel.Item>
        <img
          
          src={andrea}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Andrea</h3>
          <h5>Fashion Designer.</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        
          src={moon}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Moon</h3>
          <h5>Marketing Expert</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          src={ritika}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Ritika</h3>
          <h5>
           Shoemaker and Designer
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          
          src={zach}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Zach</h3>
          <h5>
          Bar owner
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         
          src={gabrele}
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3>Gabrielle</h3>
          <h5>
         Video Editor
          </h5>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>

</div>
    </div>
  )
}

export default Home;
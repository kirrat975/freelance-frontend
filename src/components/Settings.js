import React from 'react';
import './Settings.css';
import { Link} from "react-router-dom";


function Settings() {
  return (
    <div className='p-5'>
      
    <div className="stcont">

                <header>
                    <div className="sthead">
                      <h1><i class="fa-solid fa-gears"></i>&nbsp;Settings &nbsp;<i class="fa-solid fa-wrench"></i></h1>
                    </div>
                   
                </header>

                
                <footer className='p-5'>

                    <div className="sett">
                        
                        <ul>
                            <li><a><Link to='#acc'>Accounts</Link></a></li>
                            <li> <a>Security </a> </li>
                            <li> <a>Notifications</a>  </li>
                            <li> <a>Payment Methods</a>  </li>
                            <li><a>Form W-9</a>  </li>
                        </ul>
                    </div>
                    
                    <div className='content' id="acc">
                              <p className='text-align-right'>Need to update your profile picture?&nbsp;<a style={{color:'#1dbf73',fontWeight:'bold'}} >Go to my Profile</a></p>
                              <div>
                                <form>
                                <div className="frow row">
                                <label className='slabel'>FULL NAME
                                <input type="text" placeholder='Username' className='sinp'/>
                                </label>
                          
                                </div>

                                <div className="frow row">
                                <label className='slabel'>EMAIL
                                <input type="email" placeholder='abc@gmail.com' className='sinp'/></label>
                               
                                </div>

                                <div className=" frow row">
                                <label className='slabel'><span>ONLINE STATUS
                                <br/><small className='lhelp'>When online, your Gigs are visible under<br/> the Online search filter.</small></span>
                                <select name='' className='sinp'>
                                <option value='GO ONLINE FOR'>GO ONLINE FOR</option>
                                <option value='1 HOUR'>1 HOUR</option>
                                <option value='1 DAY'>1 DAY</option>
                                <option value='1 WEEK'>1 WEEK</option>
                                <option value='FOREVER'>FOREVER</option>
                                </select>
                                
                                
                                </label>
                                
                                </div>

                              <button id='savebtn'>Save Changes</button>

                                </form>
                                <hr/>
                                <div>
                                <label className='slabel'>ACCOUNT DEACTIVATION
                                <label>
                                <ul  className=' sinp sul'>
                                <p>What happens when you deactivate your account?</p>
                                  <li>Your profile and Gigs won't be shown on Fiverr anymore.<span><i className="fa-solid fa-circle-question"></i></span></li>
                                  <li>Active orders will be cancelled.<span><i className="fa-solid fa-circle-question"></i></span></li>
                                  <li>You won't be able to re-activate your Gigs.</li>
                                </ul>
                                </label>
                                </label>
                                
                              </div>
                              <div>
                                <label className='slabel'>I am leaving because...
                                <select name="reason" className='sinp'>
                    <option value="0">Choose a reason</option>
                    <optgroup label="Account" issues="">
                        <option>Unsubscribe from Fiverr emails</option>
                        <option>I want to change my username</option>
                        <option>I have another Fiverr account</option>
                        <option>Other</option>
                    </optgroup>

                    <optgroup label="Selling" issues="">
                        <option>Not getting enough orders</option>
                        <option>Negative experience with buyer/s</option>
                        <option>I get too many orders</option>
                        <option>Fiverr is complicated or hard to use</option>
                        <option>I'm unhappy with Fiverr's policies</option>
                        <option>Other</option>
                    </optgroup>

                <optgroup label="Buying" issues="">
                    <option>I can't find what I need on Fiverr</option>
                    <option>Fiverr is complicated or hard to use</option>
                    <option>Negative experience with seller/s</option>
                    <option>I'm unhappy with Fiverr's policies</option>
                    <option>Other</option>
                </optgroup>

                <option>Something else</option>
            </select>
                                </label>
                                
            <button  id="disbtn" disabled>Deactivate Account</button>
                              </div>
                              </div>
                            </div>
                </footer>

            </div>
            
    </div>
  )
}

export default Settings;
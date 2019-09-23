import React from "react";
import "./Footer.css";
import facebook from '../Images/facebook.JPG'
import tweeter from '../Images/tweeter.JPG'
import linkedIn from '../Images/linkedIn.JPG'
import { link } from "fs";

function Footer() {

  return (
  <div className='footerBigMain'>
  <div className='footerContainer'>

    <section className='footMiddle'>
        <div className = 'footRests'>
            <p className = 'footP'>HOME</p>
            <p className = 'footP'>WORK</p>
            <p className = 'footP'>ABOUT</p>
            <p className = 'footP'>CONTACT</p>
        </div>
        <div className = 'footLinks'>
            <img src={facebook} className="footPicture" alt='facebook'></img>
            <img src={tweeter} className="footPicture" alt='twitter'></img>
            <img src={linkedIn} className="footPicture" alt='Linked In'></img>
        </div>

        <div className= 'privateFoot'>
            <p className = 'footP'>Privacy Policy | Copyright 2017</p>
        </div>
    </section>


    <section className='footNumbers'> 
        <p className='footP' id='footNumb'>(214)774-4262</p>
    </section>

  </div>
  </div>
  );
}
 
export default Footer;

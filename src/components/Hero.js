import React from 'react';

const Hero = () => {
  return (
    <div className='main' id="main">
      <div className='main-background' />
      <div className='main-content'>
        <h1>Hi,<br/>Welcome to<br/>Jhill's art and crafts</h1>
        <h3>Scroll down for paintings . . .</h3>
        <div className='main-orders'>
          <div className='order'>
            <div className='order-title'>ORDER SKETCH?</div>
            {/* <div className='icons arrow-down'><img src={require('../assets/arrow_down.png')} alt='' /></div> */}
          </div>
          <div className='contact'>
            <div className='icons mr-8'><img src={require('../assets/mail.png')} alt='' /></div>
            <a href="mailto:jhillsartandcrafts@gmail.com?subject=Placing an order online ">jhillsartandcrafts@gmail.com</a>
          </div>
          <div className='contact'>
            <div className='icons mr-8'><img src={require('../assets/phone.png')} alt='' /></div>
            <a href="tel:+91 9101700198">+91 9101700198</a>
          </div>
          <a className="arrow" href="#gallery">
            <img src={require('../assets/arrow_down.png')} className="arrow-image bounce" alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;

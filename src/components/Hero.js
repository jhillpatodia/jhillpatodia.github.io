import React from 'react';

const Hero = () => {
  return (
    <div className='main'>
      <div className='main-background' />
      <div className='main-content'>
        <h1>Hi,<br/>Welcome to<br/>Jhill's art and crafts</h1>
        <h3>Paintings coming soon . . .</h3>
        <div className='main-orders'>
          <div className='order'>
            <div className='order-title'>ORDER SKETCH</div>
            <i className="fa fa-chevron-circle-down" aria-hidden="true" />
          </div>
          <div className='contact'>
            <span className='f-icon mr-8'><i className="fa fa-envelope" aria-hidden="true" /></span>
            <a href="mailto:jhillsartandcrafts@gmail.com?subject=Placing an order online ">jhillsartandcrafts@gmail.com</a>
          </div>
          <div className='contact'>
            <span className='f-icon mr-8'><i className="fa fa-mobile f-mobile" aria-hidden="true" /></span>
            <a href="tel:+91 9101700198">+91 9101700198</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

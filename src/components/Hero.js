import React from 'react';

const Hero = () => {
  return (
    <div className='main'>
      <div className='main-background' />
      <div className='main-content'>
        <h1>Hi,<br/>Welcome to<br/>Jhill's art and crafts</h1>
        <h3>Paintings coming soon...</h3>
        <div className='main-orders'>
          <div className='mb-8'><b>FOR ORDERS:</b></div>
          <div className='mb-6'><b style={{paddingRight: 6}}>Mail me at: </b>jhillsartandcrafts@gmail.com</div>
          <div><b style={{paddingRight: 6}}>Contact: </b><a href="tel:+91 9101700198">+91 9101700198</a></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

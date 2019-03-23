import React from 'react';

const Hero = () => {
  return (
    <div className='main' style={{textAlign: 'center'}}>
      <h1>Hi, Welcome to Jhill's art and crafts</h1>
      <h2>Paintings coming soon...</h2>
      <div style={{textAlign: 'center'}}>
        <div style={{marginBottom: 6}}><b>FOR ORDERS:</b></div>
        <div><b style={{paddingRight: 6}}>Mail me at: </b>jhillsartandcrafts<span style={{fontFamily: 'sans-serif', fontSize: 12}}>@</span>gmail.com</div>
        <div><b style={{paddingRight: 6}}>Contact: </b>+91 9101700198</div>
      </div>
    </div>
  );
};

export default Hero;

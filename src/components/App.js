import React from 'react';
// import Header from "./Header";
import Hero from "./Hero";
import Ps from "./customPhotoswipe";

class App extends React.Component {
  componentDidMount() {
    window.onscroll = () => {
      let scrollingEvent = document.getElementsByClassName('goto-top')[0];
      if (window.pageYOffset > 120) {
        scrollingEvent && (scrollingEvent.style.display = 'flex');
      } else {
        scrollingEvent && (scrollingEvent.style.display = 'none');
      }
    };
  }

  render() {
    return (
      <React.Fragment>
        {/*<Header />*/}
        <Hero />
        <Ps />
        <div className="footer-message">
          <div className="footer-message-text">&mdash; That's all folks &mdash;</div>
          <a href="#main" className="goto-top" title="Back to top">
            <div>Back to top</div>
            <img src={require('../assets/arrow_down.png')} className="goto-top-image" alt='' />
          </a>
        </div>
      </React.Fragment>
    )
  }
}
export default App;

import React from 'react';
import {PhotoSwipeGallery} from 'react-photoswipe';
import 'react-photoswipe/lib/photoswipe.css';
import { data } from '../localService/data';
import _ from 'lodash';

let options = {
  shareEl: false,
};

class Ps extends React.Component {
  state = {
    cData: [],
  };

  componentDidMount() {
    this._getItems();
  }

  getThumbnailContent = (item) => {
    return (
      <div className="card">
        <img src={item.thumb} width={320} height={240} style={{objectFit: 'cover'}} alt='' />
        <div className="card-details">
          <div className="gallery-item__title">{item.title}</div>
          <div className="gallery-item__details">
            <div className="gallery-item__surface">
              <div className="gallery-item__head">surface</div>
              <div className="gallery-item__desc">{_.startCase(item.surface)}</div>
            </div>
            <div className="gallery-item__medium">
              <div className="gallery-item__head">medium</div>
              <div className="gallery-item__desc">{_.startCase(item.medium)}</div>
            </div>
            <div className="gallery-item__size">
              <div className="gallery-item__head">size</div>
              <div className="gallery-item__desc">{item.size} cms</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  _getItems = (e) => {
    let allData = data;
    const customParams = {
      w: 1200,
      h: 900,
    };
    for(let i in allData) {
      Object.assign(allData[i], customParams);
    }
    this.setState({
      cData: allData,
    })
  };

  render() {
    const { cData } = this.state;

    return (
      cData && cData.length? (
        <div className="gallery" id="gallery">
          <div className="gallery-head">Gallery</div>
          <PhotoSwipeGallery items={cData} options={options} thumbnailContent={this.getThumbnailContent}/>
        </div>
      ) : null
    );
  }
}

export default Ps;

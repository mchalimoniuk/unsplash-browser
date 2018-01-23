import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionImgPreview from './CollectionImgPreview';

import './PhotoListItem.css';

class PhotoListItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  }

  onPhotoClick() {
    const { id } = this.props.photo;
    this.props.history.push(`/photos/${id}`);
  }

  render() {
    const {
      urls: { small },
      likes
    } = this.props.photo;

    const style = {
      position: 'relative',
      float: 'left',
      width:  250,
      height: 250,
      backgroundPosition: '50% 50%',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundImage: `url(${small})`
    };
    
    return (
      <div className='col-sm' style={{ padding: 0, marginBottom: 20 }} >
        <div style={style} >
          <div className='data-overlay' photoid={this.props.photo.id} onClick={this.onPhotoClick.bind(this)}>
            <div>
              <p>Pobrano: ???</p>
              <p>Like'ów: {likes}</p>
              <p>Państwo: ???</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoListItem);

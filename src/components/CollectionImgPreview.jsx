import React from 'react';


class CollectionImgPreview extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  }

  renderImages() {
    return this.props.images.map(image => {
      const style = {
        position: 'relative',
        display: 'inline-block',
        width:  150,
        height: 150,
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundImage: `url(${image.urls.thumb})`
      };
      return (
        <div key={image.id} className='col' style={{ padding: 0 }} >
          <div style={style} ></div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.renderImages.bind(this)()}
        </div>
      </div>
    );
  }
}

export default CollectionImgPreview;

import React from 'react';
import { connect } from 'react-redux';

import { fetchPhotos } from '../actions/photos';
import PhotoListItem from '../components/PhotoListItem';


class PhotoList extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  renderPhotos() {
    return this.props.photos.map(photo => {
      return <PhotoListItem key={photo.id} photo={photo}/>;
    });
  }

  render() {
    if(!this.props.photos) {
      return <div>Wczytywanie...</div>;
    }

    return (
      <div className="container">
      <div className="row" style={{ marginTop: 20, marginBottom: 30 }}>
        <h1>People</h1>
      </div>
        <div className="row">
          {this.renderPhotos.bind(this)()}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos.data
  };
}

export default connect(mapStateToProps, { fetchPhotos })(PhotoList);

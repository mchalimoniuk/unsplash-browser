import React from 'react';
import { connect } from 'react-redux';

import { fetchPhoto } from '../actions/photos';
import '../assets/css/photoRoute.css';


class Photo extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = { fullWidth: false };
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.id);
  }

  onImgClick() {
    this.setState({ fullWidth: !this.state.fullWidth });
  }

  render() {
    const currentId = this.props.match.params.id;
    const currentPhoto = this.props.singlePhotos[currentId];


    if(!currentPhoto) {
      return 'Wczytywanie...';
    }

    let imgStyle = { width: '100%', maxHeight: 99999 };
    if(!this.state.fullWidth) imgStyle = {};

    return (
      <div className="container">
        <img src={currentPhoto.urls.full} style={imgStyle} onClick={this.onImgClick.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    singlePhotos: state.photos.singleDict
  };
}

export default connect(mapStateToProps, { fetchPhoto })(Photo);

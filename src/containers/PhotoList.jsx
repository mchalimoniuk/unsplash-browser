import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

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

  loadMore() {
    if(!this.props.fetching) {
      this.props.fetchPhotos();
    }
  }

  render() {
    const loader = <div className="loader" key={0}>Wczytywanie...</div>;
    if(!this.props.photos) {
      return loader;
    }

    return (
      <div className="container">
      <div className="row" style={{ marginTop: 20, marginBottom: 30 }}>
        <h1>People</h1>
      </div>
        <InfiniteScroll
          className="row"
          loadMore={this.loadMore.bind(this)}
          hasMore={true}
          loader={loader}
        >
          {this.renderPhotos.bind(this)()}
        </InfiniteScroll>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    photos: state.photos.data,
    fetching: state.photos.pending
  };
}

export default connect(mapStateToProps, { fetchPhotos })(PhotoList);

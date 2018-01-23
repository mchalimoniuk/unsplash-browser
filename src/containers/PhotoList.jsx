import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { fetchPhotos } from '../actions/photos';
import { fetchFeaturedCollections } from '../actions/collections';
import PhotoListItem from '../components/PhotoListItem';


class PhotoList extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  }

  componentDidMount() {
    console.log(!this.props.collectionFetching, !this.props.collections[this.props.collectionId]);
    if(!this.props.collectionFetching && !this.props.collections[this.props.collectionId]) {
      this.props.fetchFeaturedCollections();
    }
  }

  renderPhotos() {
    return this.props.photos.map(photo => {
      return <PhotoListItem key={photo.id} photo={photo}/>;
    });
  }

  loadMore() {
    if(!this.props.fetching) {
      this.props.fetchPhotos(this.props.collectionId);
    }
  }

  render() {
    const loader = <div className="loader" key={0}>Wczytywanie...</div>;
    if(!this.props.collections || !this.props.photos || !this.props.collections[this.props.collectionId]) {
      return loader;
    }

    return (
      <div className="container">
      <div className="row" style={{ marginTop: 20, marginBottom: 30 }}>
        <h1>{this.props.collections[this.props.collectionId].title}</h1>
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
  console.log(this.props);
  return {
    photos: state.photos.data,
    fetching: state.photos.pending,
    collections: state.collections.dict,
    collectionFetching: state.collections.fetching
  };
}

export default connect(mapStateToProps, { fetchPhotos, fetchFeaturedCollections })(PhotoList);

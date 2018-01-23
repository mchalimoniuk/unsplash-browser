import React from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { fetchPhotos } from '../actions/photos';
import { fetchFeaturedCollections } from '../actions/collections';
import PhotoListItem from '../components/PhotoListItem';


class PhotoList extends React.Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = { pageCount: 0 };
  }

  componentDidMount() {
    if(!this.props.collectionFetching && !this.props.collections[this.props.collectionId]) {
      this.props.fetchFeaturedCollections();
    }
  }

  renderPhotos() {
    return this.props.photos.map(photo => {
      return <PhotoListItem key={photo.id} photo={photo} photodetails={this.props.photoDetailDict[photo.id]} />;
    });
  }

  loadMore(page) {
    if(!this.props.fetching) {
      const sortOrder = this.sortSelect.value;
      const { pageCount } = this.state;
      if(page === 0) {
        this.props.fetchPhotos(this.props.collectionId, 1, sortOrder);
        this.setState({ pageCount: 1 });
        return;
      }
      
      this.props.fetchPhotos(this.props.collectionId, pageCount + 1, sortOrder);
      this.setState({ pageCount: pageCount + 1 });
    }
  }

  onSortOrderChange() {
    this.loadMore(0);
  }

  render() {
    const loader = <div className="loader" key={0}>Wczytywanie...</div>;
    if(!this.props.collections || !this.props.photos || !this.props.collections[this.props.collectionId]) {
      return loader;
    }

    return (
      <div className="container">
      <div className="row" style={{ marginTop: 20, marginBottom: 30 }}>
        <div className="col-sm-9">
          <h1>{this.props.collections[this.props.collectionId].title}</h1>
        </div>
        <div className="col-sm-3">
          <form className="">
            <div className="form-group">
              <label>Sorotowanie wg. </label>
              <select className="form-control" ref={sortSelect => this.sortSelect = sortSelect} onChange={this.onSortOrderChange.bind(this)}>
                <option value="latest">Najnowsze</option>
                <option value="popular">Najpopularniejsze</option>
              </select>
            </div>
          </form>
        </div>
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
    photoDetailDict: state.photos.singleDict,
    fetching: state.photos.pending,
    collections: state.collections.dict,
    collectionFetching: state.collections.fetching
  };
}

export default connect(mapStateToProps, { fetchPhotos, fetchFeaturedCollections })(PhotoList);

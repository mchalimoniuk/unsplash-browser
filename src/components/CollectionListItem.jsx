import React from 'react';
import { Link } from 'react-router-dom';

import CollectionImgPreview from './CollectionImgPreview';


class SectionListItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  }

  render() {
    const {
      id,
      title,
      description,
      total_photos,
      updated_at,
      preview_photos,
      user,
      latestPhotos
    } = this.props.collection;
    
    return (
      <div className="card my-4 ">
        <div className="view overlay hm-white-slight">
          <CollectionImgPreview images={latestPhotos} />
        </div>
        <div className="card-body text-center">
          <Link to={`/collections/${id}`}>
            <h4 className="card-title" style={{ marginBottom: 0 }}><strong>{title}</strong></h4>
          </Link>
          <h6 style={{ marginBottom: 15 }}>{user.name}</h6>
          <p className="card-text">{description ? description : 'Brak opisu'}</p>
        </div>
      </div>
    );
  }
}

export default SectionListItem;

import React from 'react';


class SectionListItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  }

  render() {
    const {
      title,
      description,
      total_photos,
      updated_at,
      preview_photos,
      user: { username }
    } = this.props.collection;
    // console.log(this.props.collection);
    
    return (
      <div className="card mb-3">
        <h3 className="card-header">{title}</h3>
        <div className="card-body">
          <h5 className="card-title">{total_photos} zdjęć</h5>
          <h6 className="card-subtitle text-muted">Autor: {username}</h6>
        </div>
        <img src={preview_photos[0].urls.thumb} alt="Card image" />
        <div className="card-body">
          <p className="card-text">{description ? description : 'Brak opisu'}</p>
        </div>
        {/* <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
        <div className="card-body">
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div> */}
        <div className="card-footer text-muted">
          Ostatnia aktualizacja: {updated_at}
        </div>
      </div>
    );
  }
}

export default SectionListItem;

import React from 'react';

import PhotoList from '../containers/PhotoList';

class Section extends React.Component {
  render() {
    return (
      <div>
        <PhotoList collectionId={this.props.match.params.id} />
      </div>
    );
  }
}

export default Section;

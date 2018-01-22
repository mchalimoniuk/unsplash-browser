import React from 'react';

import PhotoList from '../containers/PhotoList';

class Section extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  }

  render() {
    return (
      <div>
        <PhotoList />
      </div>
    );
  }
}

export default Section;

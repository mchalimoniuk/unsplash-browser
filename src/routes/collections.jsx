import React from 'react';

import CollectionList from '../containers/CollectionList';

class Sections extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  }

  render() {
    return (
      <div>
        <CollectionList />
      </div>
    );
  }
}

export default Sections;

import React from 'react';

import CollectionList from '../containers/CollectionList';

class Sections extends React.Component {
  constructor(props, context) {
    super(props, context);
    
  }

  render() {
    return (
      <div>
        <h1>Widok wszystkich sekcji</h1>
        <CollectionList />
      </div>
    );
  }
}

export default Sections;

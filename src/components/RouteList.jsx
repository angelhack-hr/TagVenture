import React from 'react';
import { css } from 'glamor';

import RouteListEntry from './RouteListEntry.jsx';

import routeSampleData from './routeSampleData.js';

class RouteList extends React.PureComponent {
  render() {
    return (
      <div {...css(styles.routeContainer)}>
        {routeSampleData.map(route => <RouteListEntry routeData={route} />)}
      </div>
    )
  }
}

const styles ={
  routeContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'sans-serif',
    padding: '10px'
  }
}

export default RouteList;

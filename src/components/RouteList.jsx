import React from 'react';
import RouteListEntry from './RouteListEntry.jsx';

import routeSampleData from './routeSampleData.js';

class RouteList extends React.PureComponent {
  render() {
    return (
      <div className="route-container">
        {routeSampleData.map(route => <RouteListEntry routeData={route} />)}
      </div>
    )
  }
}

export default RouteList;

import React from 'react';
import StarRatings from 'react-star-ratings';

class RouteListEntry extends React.PureComponent {
  getStatus() {
    return this.props.routeData.stage === 0 ? "Start" : "Continue";
  }

  render() {
    return (
      <div className="route-list-entry" key={this.props.routeData.routeId}>
        <div className="route-header">
          <p>{this.props.routeData.routeName}</p>
          <input type="submit" value={this.getStatus()} />
        </div>
        <div className="ratings">
          <StarRatings 
            rating={this.props.routeData.rating}
            starRatedColor="#ea1414"
            changeRating={this.changeRating}
          />
          <p>{this.props.routeData.rating} stars</p>
        </div>
        <p>{this.props.routeData.completionRate}% Completion Rate</p>
      </div>
    )
  }
}

export default RouteListEntry;

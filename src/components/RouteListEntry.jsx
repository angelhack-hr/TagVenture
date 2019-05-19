import React from 'react';
import StarRatings from 'react-star-ratings';
import { css } from 'glamor';

class RouteListEntry extends React.PureComponent {
  getStatus() {
    return this.props.routeData.stage === 0 ? "Start" : "Continue";
  }

  render() {
    return (
      <div {...css(styles.routeListEntry)} key={this.props.routeData.routeId}>
        <div {...css(styles.routeHeader)}>
          {this.props.routeData.routeName}
          <input 
            {...css(styles.button)}
            type="submit"
            value={this.getStatus()} 
          />
        </div>
        <div {...css(styles.ratings)}>
          <StarRatings 
            rating={this.props.routeData.rating}
            starRatedColor="#4CAF50"
            starDimension="25px"
            starSpacing="1px"
            changeRating={this.changeRating}
          />
          <p {...css(styles.star)}>{this.props.routeData.rating} stars</p>
        </div>
        <p {...css(styles.completion)}>{this.props.routeData.completionRate}% Completion Rate</p>
      </div>
    )
  }
}

const styles = {
  routeListEntry: {
    backgroundColor: '#ebebeb80',
    borderRadius: '3px',
    height: '80px',
    margin: '5px',
    padding: '10px',
    width: '200px'
  },
  routeHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  ratings: {
    display: 'flex',
    flexDirection: 'row',
    fontSize: '12px',
    marginTop: '5px'
  },
  star: {
    marginLeft: '5px'
  },
  completion: {
    fontSize:'14px',
    margin: '0px'
  },
  button: {
    padding: '1px 5px',
    backgroundColor: '#ddd',
    cursor: 'pointer',
    borderRadius: '3px',
    ':hover': {
      backgroundColor: '#ededed'
    },
    textAlign: 'center'
  }
}

export default RouteListEntry;

import React from 'react';
import MyMapComponent from './Map.jsx';

class App extends React.Component {
  constructor(props) {
    super (props);

    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div>
          Hello TagVenture
        </div>
        <div>
          <MyMapComponent />
        </div>
      </div>

    )
  }
}

export default App;
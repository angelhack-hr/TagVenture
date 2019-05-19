import React from 'react';
import MyMapComponent from './Map.jsx';
import SignUp from './SignUp'

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
          <SignUp />
        </div>
        <div>
          <MyMapComponent />
        </div>
       
      </div>

    )
  }
}

export default App;
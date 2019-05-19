import React from 'react';
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
        Hello TagVenture
        <SignUp />
      </div>
    )
  }
}

export default App;
import React from 'react';
import { css } from 'glamor';
import { Auth } from 'aws-amplify'
import sha from 'sha.js';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      authCode: '',
      loggedin: '',
    }
    this.onChange = this.onChange.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.signUp = this.signUp.bind(this);
    this.confirmSignUp = this.confirmSignUp.bind(this);
  }
  
  onChange(key, value) {
    this.setState({ [key]: value })
  }

  onChangeEmail(text) {
    this.setState({ 
      email: text, 
      username: text,
      password: new sha.sha256().update(text).digest('hex') + `ABC#s`,
    })
  }

  signUp() {
    const { username, password, email } = this.state
    Auth.signUp({ 
      username,
      password,
      attributes: {
        email
      }
    })
    .then(() => console.log('successful sign up!'))
    .catch(err => console.log('error signing up: ', err))
  }

  confirmSignUp() {
    Auth.confirmSignUp(this.state.username, this.state.authCode)
    .then(console.log('successful confirm sign up!'))
    .catch(err => console.log('error confirming signing up: ', err))
  }

  render() {
    return (
      <div {...css(styles.container)}>
        <div>Register for TagVenture</div>
        
        <div>
          <input
            {...css(styles.input)}
            placeholder='Email'
            onChange={evt => this.onChangeEmail(evt.target.value)}
            />
          <div {...css(styles.button)} onClick={this.signUp}>
            <span>Register</span>
          </div>
        </div>
 
        <div>
          <input
            {...css(styles.input)}
            placeholder='Authentication Code'
            onChange={evt => this.onChange('authCode', evt.target.value)}
          />
          <div {...css(styles.button)} onClick={this.confirmSignUp}>
            <span>Confirmation Code</span>
          </div>
        </div>

      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'sans-serif',
  }, 
  button: {
    width: '170px',
    padding: '10px 0px',
    backgroundColor: '#ddd',
    cursor: 'pointer',
    borderRadius: '3px',
    ':hover': {
      backgroundColor: '#ededed'
    },
    textAlign: 'center'
  },
  input: {
    height: 40,
    marginBottom: '10px',
    border: 'none',
    outline: 'none',
    borderBottom: '2px solid #4CAF50',
    fontSize: '16px',
    '::placeholder': {
      color: 'rgba(0, 0, 0, .3)'
    }
  }
}



export default SignUp;
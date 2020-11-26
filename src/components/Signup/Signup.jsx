import React, { Component } from 'react'
import './Signup.css';

const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}


export class Signup extends Component {   
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      email: null,
      password: null,
      errors: {
        userName: '',
        email: '',
        password: '',
      }
    };
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case 'userName': 
        errors.userName = 
          value.length < 5
            ? 'User Name must be 5 characters long!'
            : '';
        break;
      case 'email': 
        errors.email = 
          validEmailRegex.test(value)
            ? ''
            : 'Email is not valid!';
        break;
      case 'password': 
        errors.password = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
        case 'cpassword': 
        errors.cpassword = 
          value.length < 8
            ? 'Password must be 8 characters long!'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if(validateForm(this.state.errors)) {
      console.info('Valid Form')
    }else{
      console.error('Invalid Form')
    }
  }
  render() {
    return (
       <div className='wrapper'>
        <div className='form-wrapper'>
          <h2>Signup</h2>
          <form onSubmit={this.handleSubmit} noValidate >
            <div className='username'>
              <label htmlFor="username">User Name</label>
              <input type='text' name='userName' onChange={this.handleChange} noValidate />
            </div>
            <div className='email'>
              <label htmlFor="email">Email</label>
              <input type='email' name='email' onChange={this.handleChange} noValidate />
            </div>
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
            </div>
            <div className='info'>
              <small>Password must be eight characters in length.</small>
            </div>
            <div className='cpassword'>
              <label htmlFor="cpassword">Confirm Password</label>
              <input type='password' name='cpassword' onChange={this.handleChange} noValidate />
            </div>
            
            <div className='submit'>
              <button>Create</button>
            </div>
            <div className='loginDiv'>
             Have an account <a href="/login" className="loginLink">
                  Login
                </a>

                || 
                 <a href="/" className="loginLinkDiv">
                  Home
                </a>
            </div>  
          </form>
        </div>
      </div>
    )
  }
}

export default Signup

import React, { Component } from 'react'
import './login.css';

export class login extends Component {  
     handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;        
        console.log(name);
      }
    
      handleSubmit = (event) => {
        event.preventDefault();
       
      } 
  render() {
    return (
        <div className='wrapper'>
        <div className='form-wrapper-login'>
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit} noValidate >
            <div className='username'>
              <label htmlFor="username">User Name</label>
              <input type='text' name='userName' onChange={this.handleChange} noValidate />
            </div>           
            <div className='password'>
              <label htmlFor="password">Password</label>
              <input type='password' name='password' onChange={this.handleChange} noValidate />
            </div>                     
            <div className='submit'>
              <button>Login</button>             
            </div> 
            <div className='signupDiv'>
              Don't Have an account? <a href="/signup" className="signupLink">
                  Signup
                </a>
                || <a href="/" className="signupDivLink">
                  Home
                </a>
            </div>           
          </form>
        </div>
      </div>
    )
  }
}

export default login

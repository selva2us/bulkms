import React, { Component } from 'react'
import './message.css';
import SideNavPage from '../SideNav/SideNavPage ';

export class SendMessage extends Component {  
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
        <div className="MainDiv">
       
        <div class="d-flex" id="wrapper">
        <SideNavPage/>
            <div id="page-content-wrapper">
        <div className='wrapper'>
        <div className='form-wrapper-login'>
          <h2>Send Message</h2>
          <form onSubmit={this.handleSubmit} noValidate >
            <div className='groupname'>
              <label htmlFor="groupname">Select Group</label>
              <input type='text' name='groupname' onChange={this.handleChange} noValidate />
            </div>           
            <div className='msgdesc'>
              <label htmlFor="msgdesc">Message</label>
              <input type='text' name='groupdesc' onChange={this.handleChange} noValidate />
            </div>                     
            <div className='submit'>
              <button>Send Message</button>             
            </div>                    
          </form>
        </div>
      </div>
      </div>
      </div>
      </div>
    )
  }
}

export default SendMessage

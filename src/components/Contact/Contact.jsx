import React, { Component } from 'react'
import './contact.css';
import SideNavPage from '../SideNav/SideNavPage ';

export class Group extends Component {  
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
          <h2>Add Contact</h2>
          <form onSubmit={this.handleSubmit} noValidate >
            <div className='contactname'>
              <label htmlFor="contactname">Name</label>
              <input type='text' name='contactname' onChange={this.handleChange} noValidate />
            </div>           
            <div className='contactnumber'>
              <label htmlFor="contactnumber">Mobile Number</label>
              <input type='text' name='contactnumber' onChange={this.handleChange} noValidate />
            </div>  
            <div className='contactgroup'>
              <label htmlFor="contactgroup"> Select Group</label>
              <input type='select' name='contactgroup' onChange={this.handleChange} noValidate />
            </div>                    
            <div className='submit'>
              <button>Create Contact</button>             
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

export default Group

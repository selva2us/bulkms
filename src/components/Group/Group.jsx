import React, { Component } from 'react'
import './group.css';
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
          <h2>Add Group</h2>
          <form onSubmit={this.handleSubmit} noValidate >
            <div className='groupname'>
              <label htmlFor="groupname">Name</label>
              <input type='text' name='groupname' onChange={this.handleChange} noValidate />
            </div>           
            <div className='groupdesc'>
              <label htmlFor="groupdesc">Description</label>
              <input type='text' name='groupdesc' onChange={this.handleChange} noValidate />
            </div>                     
            <div className='submit'>
              <button>Create Group</button>             
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

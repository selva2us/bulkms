import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js'
import "../Dashboard/dashboard.css";

class SideNavPage extends Component { 
  handleClick = () => {
       console.log(3);
    };
render() {
    return (
     
       
            <div class="bg-light border-right" id="sidebar-wrapper">
              <div class="sidebar-heading">WESTOCK </div>
              <div class="list-group list-group-flush">
                <a href="/group" class="list-group-item list-group-item-action bg-light">Group</a>
                <a href="/contact" class="list-group-item list-group-item-action bg-light">Contact</a>
                <a href="/message" class="list-group-item list-group-item-action bg-light">Send Message</a>
                <a href="/profile" class="list-group-item list-group-item-action bg-light">Profile</a>
              </div>
            </div>           
    
    );
  }
}
export default SideNavPage;
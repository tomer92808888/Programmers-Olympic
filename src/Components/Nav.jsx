import React, { useState, Component } from 'react';
import logo from '../utils/logo.png';


class Navbar extends Component
{
    render()
    {
        return (
            <nav className="navbar navbar-dark bg-dark" aria-label="First navbar example">
                <div className="container-fluid">
                    <a className="navbar-brand me-auto" href="#"><img className="col-1 mx-1" width="50px" src={logo} /> Programmers Olympic</a>
                    
                    <div className="row" >
                        <div className="col-12">
                            <button className="btn btn-warning rounded-pill mx-1" >Sign Up</button>
                            <button className="btn btn-warning rounded-pill mx-1" >Sign In</button>
                        </div> 
                    </div>
                    
                </div>
            </nav>
        );
    }
}

export default Navbar;
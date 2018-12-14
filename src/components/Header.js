import React,{Component} from 'react';

export default class Header extends Component{
    render(){
        return (
        
        <header>
            <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
                <h4 className="navbar-brand">Dhruv's Event Manager</h4>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                </div>
            </nav>
        </header>
        
        )
    }
} 

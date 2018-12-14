import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';

import AddEvent from './components/AddEvent';
import EventPanel from './components/EventPanel';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="container">
          <AddEvent />
          <div className="row">&nbsp;</div>
          <div className="row">
                  <div className="col-2">
                  <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#addmodal" ><span className="fa fa-plus"></span>Add Event</button>
                  </div>
          </div>
          <div className="row">&nbsp;</div>
          <EventPanel />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

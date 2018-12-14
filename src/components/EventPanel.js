import React, {Component} from 'react';
import {connect} from 'react-redux';
import EditEvent from './EditEvent';
import {deleteEvent} from '../action/index';

class EventPanel extends Component{
    state = {
        openEdit : false,
        event : null
    }
    clearData = () => {
        this.setState({openEdit : false,
            event : null});
    }
    render(){
        return (
            <React.Fragment>
            {this.state.openEdit ?<EditEvent editReq={this.state.event} clearData = {()=>this.clearData} /> : null}
            <div className="row">
                <div className="col-sm-12">
                <div className="table-responsive">          
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>City</th>
                                    <th>Email</th>
                                    <th colSpan={5}>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.events.length===0?
                                    <td colSpan={6} Style="text-align:center">No Events are registered yet.</td>:
                                    this.props.events.map(event => {
                                        return <tr key={event.id}>
                                        <td>{event.title}</td>
                                        <td>{event.allDay ? 'All Days':event.startDate+' to ' + event.endDate}</td>
                                        <td>{event.city}</td>
                                        <td>{event.email}</td>
                                        <td colSpan={5}>{event.comment}</td>
                                        <td>
                                            <button className="btn btn-primary" data-toggle="modal" data-target="#editmodal" onClick = {() => {this.setState({openEdit:true, event:event})}}><span className="fa fa-edit"></span> Edit</button>
                                            &nbsp;
                                            <button className="btn btn-danger" onClick={() =>this.props.deleteEvent(event)}><span className="fa fa-times"></span> Delete</button>
                                        </td>
                                    </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </React.Fragment>
        );
    }
}

function mapDispatchToProps(dispatch){
    return {
        deleteEvent : (obj) => {dispatch(deleteEvent(obj))},
    };
}

function mapStateToProps({events}){
    return {
      events
    };
  }

export default connect(mapStateToProps,mapDispatchToProps)(EventPanel);
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addEvent} from '../action/index';

class AddEvent extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : '',
            startDate : '',
            endDate : '',
            allDay : false,
            city : '',
            email:'',
            comment:'',
            errorMsg:null
        }
    }
    submitNewEvent = () => {
        var item = {
            id : null,
            title : this.state.title,
            startDate : this.state.startDate,
            endDate : this.state.endDate,
            allDay : this.state.allDay,
            city : this.state.city,
            email:this.state.email,
            comment : this.state.comment
        };
        this.props.addEvent(item);
        this.setState({
            title : '',
            startDate : '',
            endDate : '',
            allDay : false,
            city : '',
            email:'',
            comment:''
        });
    }
    handleFieldChange = (event) =>{
        if(event.target.id === 'title')
            this.setState({title : event.target.value});
        if(event.target.id === 'startDate')
            this.setState({startDate : event.target.value});
        if(event.target.id === 'endDate')
            this.setState({endDate : event.target.value});
        if(event.target.id === 'allDay')
            this.setState({allDay : !this.state.allDay});
        if(event.target.id === 'city')
            this.setState({city : event.target.value});
        if(event.target.id === 'email')
            this.setState({email : event.target.value});
        if(event.target.id === 'comment')
            this.setState({comment : event.target.value});
    }
    render(){
        return (
            <React.Fragment>
        <div className="modal fade" id="addmodal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                <form>
                    <div className="modal-header">
                    <h4 className="modal-title">Add Event</h4>
                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                        
                    </div>
                    <div className="modal-body">   
                        <div className="form-group row">
                            <label htmlFor="title" className="col-3 col-form-label">Title</label>
                            <div className="col-9">
                                <input className="form-control" type="text" onChange={this.handleFieldChange} value={this.state.title} id="title" placeholder="Enter Title" />
                            </div>
                        </div>
                        {!this.state.allDay ? 
                        <React.Fragment>    
                        <div className="form-group row">
                            <label htmlFor="startDate" className="col-3 col-form-label">Start Date</label>
                            <div className="col-9">
                                <input className="form-control" type="date" onChange={this.handleFieldChange} value={this.state.startDate} id="startDate" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="endDate" className="col-3 col-form-label">End Date</label>
                            <div className="col-9">
                                <input className="form-control" type="date" onChange={this.handleFieldChange} value={this.state.endDate} id="endDate" />
                            </div>
                        </div>
                        </React.Fragment> 
                         : <div></div>
                        }
                        <div className="form-group row">
                            <div className="col-3"></div>
                            <div className="checkbox col-9">
                                <label><input type="checkbox"  onChange={this.handleFieldChange} value={this.state.allDay} id="allDay"/> All Days?</label>
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label htmlFor="city" className="col-3 col-form-label">City</label>
                            <div className="col-9">
                                <input className="form-control" type="text" onChange={this.handleFieldChange} value={this.state.city} id="city" placeholder="Enter City"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-3 col-form-label">Email</label>
                            <div className="col-9">
                                <input className="form-control" type="email" onChange={this.handleFieldChange} value={this.state.email} id="email" placeholder="Enter Email"/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="comment" className="col-3 col-form-label">Description</label>
                            <div className="col-9">
                                <textarea className="form-control" rows="5" onChange={this.handleFieldChange} value={this.state.comment} id="comment" placeholder="Enter Description"></textarea>
                            </div>
                        </div>
                    
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-success" data-dismiss="modal" onClick={() =>this.submitNewEvent()} >Add Event</button>
                        <button className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                    </form>
                </div> 
                
            </div>
        </div>
        </React.Fragment>
        );
    }
}
function mapDispatchToProps(dispatch){
    return {
        addEvent : (obj) => {dispatch(addEvent(obj))},
    };
}

export default connect(null, mapDispatchToProps)(AddEvent);
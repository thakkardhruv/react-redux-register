import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateEvent} from '../action/index';

class EditEvent extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : '',
            startDate : '',
            endDate : '',
            allDay : false,
            city : '',
            email:'',
            comment:''
        }
    }
    updateEvent = () => {
        var item = {
            id : this.props.editReq.id,
            title : this.state.title,
            startDate : this.state.startDate,
            endDate : this.state.endDate,
            allDay : this.state.allDay,
            city : this.state.city,
            email:this.state.email,
            comment : this.state.comment
        };
        this.props.updateEvent(item);
        this.props.clearData();
    }
    componentWillMount(){
        if(this.props.editReq){
            this.setState({
                title : this.props.editReq.title,
                startDate : this.props.editReq.startDate,
                endDate : this.props.editReq.endDate,
                allDay : this.props.editReq.allDay,
                city : this.props.editReq.city,
                email:this.props.editReq.email,
                comment:this.props.editReq.comment
            });
        }
        
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
        <div className="modal fade" id="editmodal" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                    <h4 className="modal-title">Edit Event</h4>
                        <button type="button" className="close" data-dismiss="modal" onClick={this.props.clearData()}>&times;</button>
                        
                    </div>
                    <div className="modal-body">   
                        <div className="form-group row">
                            <label htmlFor="title" className="col-3 col-form-label">Title</label>
                            <div className="col-9">
                                <input className="form-control" type="text" onChange={this.handleFieldChange} value={this.state.title} id="title" />
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
                                <input className="form-control" type="text" onChange={this.handleFieldChange} value={this.state.city} id="city" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="email" className="col-3 col-form-label">Email</label>
                            <div className="col-9">
                                <input className="form-control" type="email" onChange={this.handleFieldChange} value={this.state.email} id="email" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label htmlFor="comment" className="col-3 col-form-label">Description</label>
                            <div className="col-9">
                                <textarea className="form-control" rows="5" onChange={this.handleFieldChange} value={this.state.comment} id="comment"></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button className="btn btn-success" data-dismiss="modal" onClick={() =>this.updateEvent()}>Update Event</button>
                        <button className="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                </div> 
            </div>
        </div>
        </React.Fragment>
        
        );
    }
}
function mapDispatchToProps(dispatch){
    return {
        updateEvent : (obj) => {dispatch(updateEvent(obj))},
    };
}

export default connect(null, mapDispatchToProps)(EditEvent);
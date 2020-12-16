import React, { Component } from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createProject } from '../../actions/ProjectAction';
class AddProject extends Component {

    constructor(props){
        super(props);
        this.state={
            projectName:"",
            projectIdentifier:"",
            description:"",
            start_date:"",
            end_date:""
        }
        //this.onChange=this.onChange.bind(this);
    }

    onChange=(event)=>{
       this.setState(
           {[event.target.name]:event.target.value}
       );
    }

    onSubmit=(event)=>{
        event.preventDefault();
        const newProject = {
            projectName:this.state.projectName,
            projectIdentifier:this.state.projectIdentifier,
            description:this.state.description,
            start_date:this.state.start_date,
            end_date:this.state.end_date
        }

       // TODO :  Call a method to send project on Springboot
       console.log(newProject);

    }
    render() {
        return (
            <div className="project">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h5 className="display-4 text-center">Create Project form</h5>
                        <hr />
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg " 
                                    placeholder="Project Name" 
                                    name="projectName" 
                                    onChange={this.onChange}
                                    value={this.state.projectName}/>
                            </div>
                            <div className="form-group">
                                <input 
                                    type="text" 
                                    className="form-control form-control-lg" 
                                    placeholder="Unique Project ID" 
                                    name="projectIdentifier" 
                                    onChange={this.onChange}
                                    value={this.state.projectIdentifier}
                                    />
                            </div>
                           
                            <div className="form-group">
                                <textarea 
                                    className="form-control form-control-lg" 
                                    placeholder="Project Description" 
                                    name="description" 
                                    onChange={this.onChange}
                                    value={this.state.description}></textarea>
                            </div>
                            <h6>Start Date</h6>
                            <div className="form-group">
                                <input 
                                    type="date" 
                                    className="form-control form-control-lg" 
                                    name="start_date" 
                                    onChange={this.onChange}
                                    value={this.state.start_date}/>
                            </div>
                            <h6>Estimated End Date</h6>
                            <div className="form-group">
                                <input 
                                    type="date" 
                                    className="form-control form-control-lg" 
                                    onChange={this.onChange}
                                    name="end_date" value={this.state.end_date}/>
                            </div>
    
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

AddProject.propTypes = {
    createProject:PropTypes.func.isRequired
}

export default connect(null,{createProject})(AddProject);

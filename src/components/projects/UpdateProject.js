import React, { Component } from 'react'
import {getProject,createProject} from '../../actions/ProjectAction';
import PropTypes from "prop-types";
import { connect } from "react-redux";
 class UpdateProject extends Component {

    constructor(props){
        super(props);
        this.state=  {
            "id": "",
            "projectName": "",
            "projectIdentifier": "",
            "description": "",
            "start_date": "",
            "end_date": ""           
        }
    }

    onChange=(event)=>{
        this.setState(
            {[event.target.name]:event.target.value}
        );
     }

     onSubmit=(event)=>{
        event.preventDefault();
        const newProject = {
            id:this.state.id,
            projectName:this.state.projectName,
            projectIdentifier:this.state.projectIdentifier,
            description:this.state.description,
            start_date:this.state.start_date,
            end_date:this.state.end_date
        }

      this.props.createProject(newProject,this.props.history);

    }

    componentDidMount(){
       const {id} = this.props.match.params;
       this.props.getProject(id,this.props.history);
      
    }

    componentWillReceiveProps(nextProps){
        const {
            id,
            projectName,
            projectIdentifier,
            description,
            start_date,
            end_date           
        }=nextProps.project;

        this.setState({
            id,
            projectName,
            projectIdentifier,
            description,
            start_date,
            end_date           
        });
    }
    render() {
       
        return (
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h5 className="display-4 text-center">Edit Project form</h5>
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
                                        value={this.state.projectIdentifier}
                                        disabled />
                                </div>
                             
                                <div className="form-group">
                                    <textarea 
                                    className="form-control form-control-lg" 
                                    name="description"
                                    onChange={this.onChange}
                                    value={this.state.description}
                                    placeholder="Project Description"></textarea>
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input 
                                    type="date" 
                                    className="form-control form-control-lg"
                                    onChange={this.onChange} 
                                    value={this.state.start_date}
                                    name="start_date" />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input 
                                        type="date" 
                                        className="form-control form-control-lg" 
                                        value={this.state.end_date}
                                        onChange={this.onChange}
                                        name="end_date" />
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

UpdateProject.propTypes = {
    getProject:PropTypes.func.isRequired,
    createProject:PropTypes.func.isRequired,
    project:PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    project: state.projects.project
  });

export default connect(mapStateToProps,{getProject,createProject})(UpdateProject);
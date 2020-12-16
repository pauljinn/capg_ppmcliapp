import React from 'react'
import ProjectItemComponent from './ProjectItemComponent';
import CreateProjectButton from './projects/CreateProjectButton';
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {getProjects} from '../actions/ProjectAction';

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state={
            projects:[]
        }
    }

    componentDidMount(){
        this.props.getProjects();
    }
   
    render() {

        const {projects} =  this.props.projects;
      
        return (
            <div className="projects">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="display-4 text-center">Projects</h1>
                        <br />
                        <CreateProjectButton/>
                        <br />
                        <hr />
    
                            {
                                projects.map((project)=>{
                                    return  <ProjectItemComponent key={project.id} project={project}/>
                                })
                            }
                      
    
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
Dashboard.propTypes={
    getProjects:PropTypes.func.isRequired

}

const mapStateToProps=(state)=>({
    projects:state.projects
});
export default connect(mapStateToProps,{getProjects})(Dashboard);

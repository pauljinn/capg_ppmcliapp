import React from 'react'
import ProjectItemComponent from './ProjectItemComponent';
import CreateProjectButton from './projects/CreateProjectButton';

class Dashboard extends React.Component {

    constructor(props){
        super(props);
        this.state={
            projects:[]
        }
    }

    render() {
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
    
                       <ProjectItemComponent/>
                      
    
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default Dashboard;

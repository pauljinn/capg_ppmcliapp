
import './App.css';
import Dashboard from './components/Dashboard';
import HeaderComponent from './components/layout/HeaderComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import AddProject from './components/projects/AddProject';

function App() {
  return (

    <Router>
    <HeaderComponent/>
    <Route exact path="/dashboard" component={Dashboard}/>
    <Route exact path="/addProject" component={AddProject}/>
    </Router>
  
  );
}

export default App;

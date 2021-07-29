import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import EmployeePage from './components/EmployeePage';
import DepartmentPage from './components/DepartmentPage';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <div>
      <h2>Welcome to App Component....</h2>
      <ul>
        <li><Link to="/employees">Employees</Link></li>
        <li><Link to="/departments">Departments</Link></li>
        <li><Link to="/projects">Projects</Link></li>
      </ul>
      <Route path="/employees" component={EmployeePage}></Route>
      <Route path="/departments" component={DepartmentPage}></Route>
      <Route path="/projects" component={ProjectPage}></Route>
  </div>
  );
}

ReactDOM.render(<BrowserRouter><App></App></BrowserRouter>, document.getElementById("root"));

export default App;

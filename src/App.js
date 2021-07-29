import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom';

import EmployeePage from './components/EmployeePage';
import DepartmentPage from './components/DepartmentPage';
import ProjectPage from './components/ProjectPage';
import InvalidPath from './components/NotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>Welcome to App Component....</h2>
        <ul>
          <li><Link to="/">Employees</Link></li>
          <li><NavLink to="/departments" activeClassName="testClass">Departments</NavLink></li>
          <li><NavLink to="/projects" activeClassName="testClass">Projects</NavLink></li>
        </ul>
        <Switch>
          <Route exact path="/" component={EmployeePage}></Route>
          <Route path="/departments" component={DepartmentPage}></Route>
          <Route path="/projects" component={ProjectPage}></Route>
          <Route path="/departments" component={EmployeePage}></Route>
          <Route component={InvalidPath}></Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import EmployeePage from './components/EmployeePage';
import DepartmentPage from './components/DepartmentPage';
import ProjectPage from './components/ProjectPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>Welcome to App Component....</h2>
        <ul>
          <li><Link to="/">Employees</Link></li>
          <li><Link to="/departments">Departments</Link></li>
          <li><Link to="/projects">Projects</Link></li>
        </ul>
        <Switch>
          <Route exact path="/" component={EmployeePage}></Route>
          <Route path="/departments" component={DepartmentPage}></Route>
          <Route path="/projects" component={ProjectPage}></Route>
          <Route path="/departments" component={EmployeePage}></Route>
        </Switch>
        
      </div>
    </BrowserRouter>
  );
}

ReactDOM.render(<App></App>, document.getElementById("root"));

export default App;

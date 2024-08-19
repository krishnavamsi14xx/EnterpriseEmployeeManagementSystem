import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EmployeeProfile from './components/EmployeeProfile';
import LeaveManagement from './components/LeaveManagement';
import Payroll from './components/Payroll';
import PerformanceTracker from './components/PerformanceTracker';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/profile" component={EmployeeProfile} />
        <Route path="/leave" component={LeaveManagement} />
        <Route path="/payroll" component={Payroll} />
        <Route path="/performance" component={PerformanceTracker} />
      </Switch>
    </Router>
  );
};

export default App;

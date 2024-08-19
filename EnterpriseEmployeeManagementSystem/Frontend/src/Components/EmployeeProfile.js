import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchEmployees } from '../redux/actions/employeeActions';

const EmployeeProfile = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const employees = useSelector(state => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmployees());
  }, [dispatch]);

  return (
    <div>
      <h1>Employee Profile</h1>
      <select onChange={e => setSelectedEmployee(e.target.value)}>
        <option value="">Select Employee</option>
        {employees.map(employee => (
          <option key={employee.id} value={employee.id}>{employee.name}</option>
        ))}
      </select>
      {selectedEmployee && (
        <div>
          {/* Display selected employee details */}
        </div>
      )}
    </div>
  );
};

export default EmployeeProfile;

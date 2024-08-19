export const fetchEmployees = () => async dispatch => {
  const response = await fetch('/api/employees');
  const data = await response.json();
  dispatch({ type: 'FETCH_EMPLOYEES', payload: data });
};

export default function createReportObject(employeesList) {
  const employees = { ...employeesList };
  let counter = 0;
  function getNumberOfDepartments(employees) {
    counter = Object.keys(employees).length;
    return counter;
  }

  return {
    allEmployees: employees,
    getNumberOfDepartments,
  };
}

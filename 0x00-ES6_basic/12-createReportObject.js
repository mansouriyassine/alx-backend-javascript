#!/usr/bin/node
export default function createReportObject(employeesList) {
  const allEmployees = { ...employeesList };

  function getNumberOfDepartments() {
    return Object.keys(allEmployees).length;
  }

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}

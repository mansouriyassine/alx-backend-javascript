#!/usr/bin/node
export default function createReportObject(employeesList) {
  const allEmployees = { ...employeesList };

  const getNumberOfDepartments = (allEmployees) => Object.keys(allEmployees).length;

  return {
    allEmployees,
    getNumberOfDepartments,
  };
}
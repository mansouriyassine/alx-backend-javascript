#!/usr/bin/node
class HolbertonCourse {
    constructor(name, length, students) {
      this._name = this.validateString(name, 'Name');
      this._length = this.validateNumber(length, 'Length');
      this._students = this.validateStudents(students);
    }
  
    get name() {
      return this._name;
    }
  
    set name(newName) {
      this._name = this.validateString(newName, 'Name');
    }
  
    get length() {
      return this._length;
    }
  
    set length(newLength) {
      this._length = this.validateNumber(newLength, 'Length');
    }
  
    get students() {
      return this._students;
    }
  
    set students(newStudents) {
      this._students = this.validateStudents(newStudents);
    }
  
    validateString(value, fieldName) {
      if (typeof value !== 'string') {
        throw new TypeError(`${fieldName} must be a string`);
      }
      return value;
    }
  
    validateNumber(value, fieldName) {
      if (typeof value !== 'number' || isNaN(value)) {
        throw new TypeError(`${fieldName} must be a number`);
      }
      return value;
    }
  
    validateStudents(students) {
      if (!Array.isArray(students) || students.some(student => typeof student !== 'string')) {
        throw new TypeError('Students must be an array of strings');
      }
      return students;
    }
  }
  
  export default HolbertonCourse;  
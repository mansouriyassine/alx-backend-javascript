#!/usr/bin/node
class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse.validateString(name, 'Name');
    this._length = HolbertonCourse.validateNumber(length, 'Length');
    this._students = HolbertonCourse.validateStudents(students);
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = HolbertonCourse.validateString(newName, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = HolbertonCourse.validateNumber(newLength, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = HolbertonCourse.validateStudents(newStudents);
  }

  static validateString(value, fieldName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${fieldName} must be a string`);
    }
    return value;
  }

  static validateNumber(value, fieldName) {
    if (typeof value !== 'number' || Number.isNaN(value)) {
      throw new TypeError(`${fieldName} must be a number`);
    }
    return value;
  }

  static validateStudents(students) {
    if (!Array.isArray(students) || students.some((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    return students;
  }
}

export default HolbertonCourse;
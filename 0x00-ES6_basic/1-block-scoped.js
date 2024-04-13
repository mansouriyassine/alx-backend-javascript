/* eslint-disable no-var, block-scoped-var, vars-on-top, no-redeclare */
export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    // Conditional block is empty to maintain initial values
  }

  return [task, task2];
}
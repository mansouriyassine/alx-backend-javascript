function cleanSet(set, startString) {
  const filteredValues = [...set].filter(value => value.startsWith(startString));

  const result = filteredValues.map(value => value.slice(startString.length)).join('-');

  return result;
}

export default cleanSet;
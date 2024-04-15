function cleanSet(set, startString) {
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));
  return filteredValues.join('-').slice(startString.length);
}

export default cleanSet;

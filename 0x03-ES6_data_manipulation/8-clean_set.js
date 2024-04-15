export default function cleanSet(set, startString) {
  const cleanedSet = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      cleanedSet.push(value.slice(startString.length));
    } else {
      cleanedSet.push(value);
    }
  }

  return cleanedSet.join('-');
}
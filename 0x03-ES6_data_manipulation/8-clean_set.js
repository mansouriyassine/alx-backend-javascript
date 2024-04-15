export default function cleanSet(set, startString) {
  const cleanedSet = [];

  for (const value of set) {
    if (value.startsWith(startString)) {
      cleanedSet.push(value.slice(startString.length));
    }
  }

  return cleanedSet.join('-');
}
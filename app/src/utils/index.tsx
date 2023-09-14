function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex<T>(arr: T[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function findArrayIndex<T>(arr: T[], predicate: (item: T) => boolean) {
  return arr.findIndex(predicate);
}

export { replaceItemAtIndex, removeItemAtIndex, findArrayIndex };

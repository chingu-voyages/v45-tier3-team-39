import React from 'react';

function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex<T>(arr: T[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

function findArrayIndex<T>(arr: T[], predicate: (item: T) => boolean) {
  return arr.findIndex(predicate);
}

function findNumberOfPropertyValuesInArrayOfObjects<T>(
  objArr: T[],
  property: keyof T
): React.ReactNode {
  const categoriesInobjArr: Record<string, number> = {};
  objArr.forEach((obj) => {
    const qty = (obj as { quantity: number }).quantity || 0;
    categoriesInobjArr[obj[property] as string] =
      (categoriesInobjArr[obj[property] as string] + qty || 0) + 1;
  });
  return Object.entries(categoriesInobjArr).map((el) => {
    return (
      <>
        <strong className="text-lg">{el[1]}</strong>
        {' x '}
        {el[0]}
        {'  '}
      </>
    );
  });
}

export {
  replaceItemAtIndex,
  removeItemAtIndex,
  findArrayIndex,
  findNumberOfPropertyValuesInArrayOfObjects,
};

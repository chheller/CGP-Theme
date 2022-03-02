import isFunction from "lodash/fp/isFunction";

export function initializeArray<T>(
  arraySize: number,
  initializer: (idx?: number) => T | T
): T[] {
  const arr = new Array(arraySize);
  const initializerIsFunction = isFunction(initializer);
  for (let i = 0; i < arraySize; i++) {
    arr[i] = initializerIsFunction ? initializer(i) : initializer;
  }
  return arr;
}

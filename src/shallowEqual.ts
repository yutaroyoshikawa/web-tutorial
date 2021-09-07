export const shallowEqual = (a: any, b: any): boolean => {
  if (a === b) {
    return true;
  }

  if (typeof a !== "object" || typeof b !== "object" || !a || !b) {
    return false;
  }

  return Object.keys(a).reduce<boolean>((acc, key) => {
    if (a[key] !== b[key]) {
      return false;
    }

    return acc;
  }, true);
}

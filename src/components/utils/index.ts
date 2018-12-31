const omit = (obj: any, arr: string[]) =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as any);

export {
  omit
}
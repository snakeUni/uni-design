const omit = (obj: any, arr: string[]) =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {} as any);

const compose = (...fns: any) => fns.reduce((f: any, g: any) => (...args: any) => f(g(...args)));

export {
  omit,
  compose
}
type ISum = (...n: number[]) => number;
type ISum2 = (ar: number[]) => number;

// the procedural way
export const pSum: ISum = (...n) => n.reduce((ac, cur) => ac + cur);

// the functional recursive way
export const rSum: ISum2 = ar => {
  const [head, ...rest] = ar;

  if (!ar.length) return 0;

  return head + rSum(rest);
};

const rSum2: ISum2 = ar => {
  const [head, ...rest] = ar;
  return head + rSum(rest);
};

export const sumAll: ISum2 = ar =>
  !ar.length ? 0 : ar[0] + rSum2(ar.slice(1));

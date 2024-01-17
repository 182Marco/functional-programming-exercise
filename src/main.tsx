type IPlusOne = (n: number) => number;
type IToStr = (n: number) => string;

const plus1: IPlusOne = n => n + 1;
const toStr: IToStr = n => n.toString();

type ICompose = (n: number) => string;

const plus1_then_toStr: ICompose = n => toStr(plus1(n));

console.log(
  `marcom ---> plus1_then_toStr(3): `,
  plus1_then_toStr(3),
  typeof plus1_then_toStr(3),
);

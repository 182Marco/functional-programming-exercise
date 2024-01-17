type IPlusOne = (n: number) => number;
type IToStr = (n: number) => string;

const plus1: IPlusOne = n => n + 1;
const toStr: IToStr = n => n.toString();

type ICompose = (n: number) => string;

export const plus1_then_toStr: ICompose = n => toStr(plus1(n));

// This way, you could create two fn that can be reused for
// different purposes, and simultaneously, a third function
// that accomplishes a distinct task simply by combining them.

const curr =
  (n1: number) =>
  (n2: number): number =>
    n1 + n2;

export const sum10 = curr(10);

// This approach allows me to achieve high flexibility
// with two parameters, while also providing the convenience
// of using it with just a single parameter when my objective
// is to add a fixed number.

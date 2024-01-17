import * as c from './concepts';
// COMPOSE
console.log(
  `marcom ---> plus1_then_toStr(3): `,
  c.plus1_then_toStr(3),
  typeof c.plus1_then_toStr(3),
);

// CURRING
console.log(`marcom ---> sum10(5): `, c.sum10(5));

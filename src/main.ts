import * as c from './concepts';

// COMPOSE
console.log(
  `plus1_then_toStr(3): `,
  c.plus1_then_toStr(3),
  typeof c.plus1_then_toStr(3),
);

// CURRING
console.log(`sum10(5): `, c.sum10(5));

// RECURSIVENESS
console.log(`c.sumAll: `, c.sumAll([1, 2, 3, 4]));

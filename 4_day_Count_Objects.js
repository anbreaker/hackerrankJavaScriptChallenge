/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */

const objects = [
  {x: 1, y: 1},
  {x: 2, y: 3},
  {x: 3, y: 3},
  {x: 3, y: 4},
  {x: 4, y: 5},
];

function getCount(objects) {
  let n = 0;
  for (let obj of objects) {
    if (obj.x === obj.y) n += 1;
  }
  return n;
}

console.log(getCount(objects));

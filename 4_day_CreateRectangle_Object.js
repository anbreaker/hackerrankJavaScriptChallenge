'use strict';
/*
 * Complete the Rectangle function
 */

const a = 4;
const b = 5;

function createRectangleObject(a, b) {
  let rectangle = new Object();
  rectangle.length = a;
  rectangle.width = b;
  rectangle.perimeter = 2 * a + 2 * b;
  rectangle.area = a * b;

  return rectangle;
}

console.log(createRectangleObject(a, b));

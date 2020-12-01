/*
Complete the getGrade(score) function in the editor. 
It has one parameter: an integer, , denoting the number 
of points Julia earned on an exam. It must return 
the letter corresponding to her  according to the following rules:

if 25, < score <= 30, then grade = A.
if 20, < score <= 25, then grade = B.
if 15, < score <= 20, then grade = C.
if 10, < score <= 15, then grade = D.
if 5, < score <= 10, then grade = E.
if 0, < score <= 5, then grade = F.
*/
'use strict';

function getGrade(score) {
  let grade;
  // Write your code here
  if (score > 25 && score < 30) grade = 'A';
  if (score > 20 && score < 25) grade = 'B';
  if (score > 15 && score < 20) grade = 'C';
  if (score > 10 && score < 15) grade = 'D';
  if (score > 5 && score < 10) grade = 'E';
  if (score > 0 && score < 5) grade = 'F';

  return grade;
}
console.log(getGrade(11));

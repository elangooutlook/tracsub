import regression from 'regression';
const result = regression.linear([[0, 12], [1, ], [2, 79],[2, 79],[2, 79]]);
const gradient = result.equation[0];
const yIntercept = result.equation[1];
console.log(gradient,yIntercept)
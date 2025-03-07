const add = function(i,j) {
  return i + j;	
};

const subtract = function(i,j) {
	return i - j;
};

const sum = function(array) {
  return array.reduce((sum,item)=> sum + item,0)
};

const multiply = function(array) {
  return array.reduce((result,item) => result *item,1)
};

const power = function(i,j) {
	let k = 0;
  let result = 1;
  for(;k < j; k++)
  {
    result *= i;
  }
  return result;
};

const factorial = function(number) {
	let i, result = 1;
  for(i = 1;i <= number; i++)
  {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

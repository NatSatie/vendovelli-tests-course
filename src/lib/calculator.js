module.exports.sum = (num1, num2) => {
  let n1 = +num1;
  let n2 = +num2;

  if (Number.isNaN(n1) || Number.isNaN(n2)){
    throw new Error('Please check your input');
  }

  return n1 + n2
}
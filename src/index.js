// You should implement your task here.
module.exports = function towelSort (matrix) {
  if(matrix) {
  const result = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) { 
       if(i % 2 === 0) {
        result.push(matrix[i][j]); 
       } else {
        let index = matrix[i].length;
        result.push(matrix[i][index - j - 1]);
       }
    } 
  }
  return result;
  } else {
    return[];
  }
}

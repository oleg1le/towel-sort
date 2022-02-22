
// You should implement your task here.

module.exports = function towelSort (matrix) {
let arr = matrix.flat(Infinity)
return arr.sort((a,b) => a-b)
}

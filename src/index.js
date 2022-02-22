
// You should implement your task here.

module.exports = function towelSort (matrix) {
let arr = matrix.flat(10)
    
return arr.sort((a,b) => a-b)
}

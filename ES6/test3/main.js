// const average = (...arr) => {
//   return arr.reduce(function (a , b) {
//     return a + b
//   }) / arr.length
// }
//
// console.log(average(1,2,3,4))

// const Push = (arr, ...nums) => {
//   for (let i = 0; i <nums.length; i++) {
//     arr.push(nums[i])
//   }
//   console.log(arr)
// }
//
// const arr = [1, 2, 3, 4]
// Push(arr,1,3,4,5)

// function insert(value) {
//   return {
//     into: function(array) {
//       return {
//         after: function(afterValue) {
//           array.splice(array.indexOf(afterValue) + 1, 0, value);
//           return array;
//         }
//       };
//     }
//   };
// }

// const insert = (value) => {
//   return {
//     into :(array) => {
//       return {
//         after : (afterValue) => {
//           array.splice(array.indexOf(afterValue) + 1, 0, value);
//           return array
//         }
//       }
//     }
//   }
// }
//
//
// console.log(insert(2).into([1, 3]).after(1));

const init = () => {
  let arr = []
  for (let i = 0; i < 10; i++) {
    arr.push(parseInt(Math.random()*100))
  }
  return arr
}

console.log(init().sort((a, b) => b - a))

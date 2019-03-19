// const display = (el) => {
//   return new Promise(resolve => {
//     el.style.transform = "scale(1,1)"
//     setTimeout(function () {
//       resolve();
//     }, 1000)
//   })
// }
//
// let img1 = document.querySelector('.img1')
// let img2 = document.querySelector('.img2')
// let img3 = document.querySelector('.img3')
//
//
//
// document.querySelector('#btn').addEventListener('click', evt => {
//   display(img1)
//     .then(function () {
//       return display(img2)
//     })
//     .then(function () {
//       return display(img3)
//     })
// })

function cook() {
  console.log('开始做饭。');
  let p = new Promise(function(resolve, reject){
    setTimeout(function() {
      console.log('做饭完毕！');
      resolve('鸡蛋炒饭');
    }, 1000);
  });
  return p;
}

function eat(data) {
  console.log('开始吃饭：' + data);
  let p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('吃饭完毕!');
      resolve('一块碗和一双筷子');
    }, 2000);
  });
  return p;
}
function wash(data) {
  console.log('开始洗碗：' + data);
  let p = new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('洗碗完毕!');
      resolve('干净的碗筷');
    }, 2000);
  });
  return p;
}

cook()
  .then(eat)
  .then(wash)
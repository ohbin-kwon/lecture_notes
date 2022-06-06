// // // callback으로 구현
// function sth1(a, callback) {
//   setTimeout(() => {
//     if (a === 1) {
//       callback(null, a);
//     } else {
//       callback(new Error());
//     }
//   }, 1000);
// }

// sth1(1, (err, result) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(result);
//   }
// });
// // promise로 구현
// function sth2(a) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (a === 1) {
//         resolve(a)
//       } else {
//         reject(new Error())
//       }
//     }, 1000);
//   }
    
//   );
// }
// console.log(sth2(1))
// sth2(1).then(data => console.log(data), error => console.log(error))
// sth2(2).then(data => console.log(data), error => console.log(error))

function delay(){
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve(new Date())
    }, 1000)
  })
}

async function a() {
  const abc = delay()
  const ccc = '1'
  return ccc
}
console.log(a())



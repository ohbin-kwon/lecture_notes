// 일반적인 동기식 함수
function add(a, b) {
  console.log(a + b);
}
add(1, 2);
// 콜백으로 바꿔본다면?
function addUseCB(a, b, callback) {
  callback(a + b);
}
function show(data){
  console.log(data)
}
addUseCB(1, 2, show);

// 비동기 함수의 결과값을 사용하려면?
// 결과값을 사용하지 못하는 경우
function sth(a, b) {
  setTimeout(() => a + b, 1000);
}
function needA(a) {
  console.log(a);
}

console.log('before')
needA(sth(1, 2));
console.log('after')


// 결과값을 사용할수 있게함
function sth2(a, b, callback) {
  setTimeout(() => callback(a + b), 1000);
}
function needA2(a) {
  console.log(a)
}

console.log('before')
sth2(1, 2, needA2);
console.log('after')

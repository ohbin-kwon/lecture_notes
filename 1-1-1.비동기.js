// 일반적인 코드
function a() {
  console.log(1)
}

function b() {
  console.log(2)
}

function c() {
  console.log(3)
}

a()
b()
c()

// nodejs가 비동기식 프로그래밍이라는것을 보여주는 코드
function a() {
  console.log(1)
}

function b() {
  console.log(2)
}

function c() {
  console.log(3)
}

a()
setTimeout(b,1000)
c()

//add
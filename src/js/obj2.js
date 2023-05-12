// 1. Function
const doAsFunction = function () {
  this.name = 'miri';
  console.log('======== doAsFunction this ========', this);
};

// 2. method shorthand
const obj = {
  doAsMethod() {
    console.log('======== doAsMethod this ========', this);
  },
};

// 3. arrow-function
const doAsArrow = () => {
  console.log('======== doAsArrow this ========', this);
};

// this의 스코프가 변하는지...? 호출시 어떤 방식으로 호출 되었는지에 따라 결정된다.
console.log(doAsFunction()); // 일반함수 호출: 전역객체. window
console.log(new doAsFunction()); // 생성자함수 호출 빈 객체 생성 및 할당: doAsFunction obj
console.log(obj.doAsMethod()); // obj obj
console.log(doAsArrow()); // window

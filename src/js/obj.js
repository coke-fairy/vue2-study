// 생성자 함수 나의 의도는 new로 쓰라고 만든것이 아닌데...?
// output를 나오는 용도로 쓴건데. 근데 누군가는 그걸 new로 만들어서 쓴다. 근데 됨...
// 너가 무엇을 위해 쓸지 몰라서 전부 준비했어... 다 있어... => 퍼포먼스 하락 => 클래스 문법 등장...! new로 생성해서 써...
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const miri = new Person('miri', 30);
const miri2 = Person('miri2', 33);

console.log(miri);
console.log(miri2);

// 1. Function
const doAsFunction = function () {};

// 2. method shorthand 객체 내에 있는 함수는 메서드라고 하지만 이건 별도 생성 방법이 있다.
const obj = {
  // function aa() {} (x)
  doAsMethod() {}, // functino keyword 사용하면 안 됨
};

// 3. arrow-function
const doAsArrow = () => {};

// console.log(doAsFunction); // 이건 잘 안 나옴

console.dir(doAsFunction); // prototype > constructor 존재

console.dir(obj.doAsMethod);

console.dir(doAsArrow);

new doAsFunction(); // 됨

new obj.doAsMethod(); // 안 됨

new doAsArrow(); // 안 됨

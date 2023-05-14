// # 1
console.log('전역 this: ', this);
// console.log('node: ', this === exports);     // true
// console.log('window: ', this === window);    // true

// # 2
const personAsFunction = function () {
  console.log('function 내부 this: ', this);
  //   console.log('node global: ', this === global);       // true
  //   console.log('node exports: ', this === exports);     // false
  //   console.log('window: ', this === window);            // true
};

personAsFunction();

// # 3
const world = {
  meat: '고기',
  personAsMethod() {
    console.log('method shorthand 내부 this: ', this); // { meat: '고기', personAsMethod: [Function: personAsMethod] }
  },
};

world.personAsMethod();

// 전역변수에 할당 및 일반 함수로 호출 결과
// const func = world.personAsMethod;
// func(); // Object [global] / window

// # 4
const Person = function (name) {
  this.name = name;
  console.log('생성자 함수 내부 this: ', this);
};

const personBabo = new Person('Babo'); // Person { name: 'Babo' }

// # 5
const personAsArrow = () => {
  console.log('화살표 함수 내부 this: ', this);
  //   console.log('node global: ', this === global); // false
  //   console.log('node exports: ', this === exports); // true
  //   console.log('window: ', this === window); // true
};

personAsArrow();


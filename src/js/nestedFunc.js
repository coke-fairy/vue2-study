"use strict";

global.meat = '뼈'; // only node
// window.meat = '뼈'; // only browser

// 객체 obj
const obj = {
  meat: '고기',
  outer() {
    console.log('=== outer this: ', this);          // { meat: '고기', outer: [Function: outer] }
    console.log('outer this.meat: ', this.meat);    // 고기

    function inner() {
      console.log('=== inner this: ', this);        // Object [global], strict: undefined
      console.log('inner this.meat: ', this.meat);  // 뼈, strict: Cannot read properties of undefined
    }

    inner();
  },
};

obj.outer();

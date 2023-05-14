'use strict';

const obj = {
  meat: '고기',
  outer() {
    const that = this;
    console.log('outer this.meat: ', this.meat); // 고기, 고기

    setTimeout(function () {
      console.log('callback this.meat: ', that.meat); // 고기, 고기
      //   console.log('callback this.meat: ', this); // Timeout {}
    }, 100);
  },
};

obj.outer();

const obj2 = {
  meat: '고기',
  outer() {
    setTimeout(() => console.log('callback2 this.meat: ', this.meat)); // 고기
  },
  outer2: () => console.log('outer2 this: ', this, global === this, exports === this), // export
};

obj2.outer();

obj2.outer2();

const obj3 = {
  meat: '고기3',
  outer() {
    console.log('outer3 this.meat: ', this.meat); // 고기3

    setTimeout(
      function () {
        console.log('callback3 this.meat: ', this.meat); // 고기3
      }.bind(this),
      100,
    );
  },
};

obj3.outer();

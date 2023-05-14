<template>
  <div id="test">
    {{ test }}
    <button id="btn1" @click="change">글자 변경(beforeUpdate, updated)</button>
    <button @click="goPage">페이지 이동(beforeDestroy, destroyed)</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    test: 'test',
  }),
  // 라이프 사이클 생성
  beforeCreate() {
    console.log('beforeCreate');
    console.log(document.getElementById('test')); // dom 생성 전. null
    console.log(this.$router);
    console.log(this.$route);
    console.log('=== this: ', this); // Vue instance 존재
    console.log('=== this.test: ', this.test); // undefined
  },
  // reactivity 적용 (getter, setter 정의 => data 접근 가능)
  created() {
    console.log(this.$router);
    console.log(this.$route);
    console.log('created');
    console.log(document.getElementById('test')); // null
    console.log('=== this.test: ', this.test); // test
  },
  // 컴파일 template
  beforeMount() {
    console.log('beforeMount');
    console.log(document.getElementById('test')); // null
  },
  // 가상돔 생성 및 교체
  mounted() {
    console.log('mounted');
    console.log(document.getElementById('test')); // 리얼 돔 접근 가능 <div id="test">TEST</div>
  },
  // 데이터 변경 시
  beforeUpdate() {
    console.log('beforeUpdate');
    console.log(this.test); // testtest 이미 변경된 후
    console.log(document.getElementById('test')); // <div id="test">testtest</div>
  },
  // 가상돔 재 랜더링
  updated() {
    console.log('updated');
    console.log(this.test); // testtest
    console.log(document.getElementById('test').get); // <div id="test">testtest</div>
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
  methods: {
    change() {
      this.test += this.test;
    },
    goPage() {
      this.$router.push({
        name: 'home',
      });
    },
  },
};
</script>

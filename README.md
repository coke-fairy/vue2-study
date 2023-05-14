# test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 용어 정리
1. Babel (Babel JavaScript 컴파일러)
- ECMAScript 2015+ 코드를 이전 버전과 호환되는 JavaScript 버전으로 변환해준다.
(최신의 js코드를 예전 js코드로 변환해준다.)

2. PWA (Progressive Web App)
- 웹과 네이티브 앱의 기능 모두의 이점을 갖도록 수 많은 특정 기술과 표준 패턴을 사용해 개발된 웹 앱 (https://developer.mozilla.org)

3. Vue Router 
- 웹페이지간 이동방법(라우팅)을 구현하도록 지원하는 라이브러리
- 웹 어플리케이션에 하나 존재 ($router, VueRouter Object)
- 전반적인 기능 관리
- localhost:8080/about console.log(this.$router);

4. route ($route object)
- 페이지 이동 등 라우팅이 발생 될 때마다 생성
- 현재 경로, param, name 등 값을 가지고 있음
- localhost:8080/about console.log(this.$route);

5. Vuex (store)
- 전역적으로(모든 컴포넌트가 공유할 수 있는) 상태(state)관리를 도와주는 Vue 라이브러리, 패턴.

6. ESLint (ES + Lint)
- JS 문법에서 에러가 있는 곳을 표시해주는 도구

7. Prettier
- 코드 포맷터
- 코드를 정해진 포맷에 맞게 변환해주는 도구

8. 라이프 사이클 테스트
- localhost:8080/about 
- 콘솔창 및 Test.vue
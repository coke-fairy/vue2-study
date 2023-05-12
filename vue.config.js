// vue-cli 3.x 는 자동생성 안 됨                         webpack.config.js?
// vue-cli 자동생성이 됐네.
// 절대경로/상대경로 세팅 가능
// 글로벌하게 파일 올려서 쓸 수도 있음
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
});

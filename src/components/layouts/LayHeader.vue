<template>
  <div class="app__container__header">
    <span> header </span>
    <button @click="goPage('content')">/content</button>
    <button @click="goPage('content2')">/content2</button>
  </div>
</template>

<script>
export default {
  methods: {
    goPage(val) {
      this.$router.push({ name: val });
    },
  },
};
</script>

<style lang="scss" scoped>
.app__container__header {
  height: 50px;
  width: 100%;
  background-color: yellow;
}
</style>

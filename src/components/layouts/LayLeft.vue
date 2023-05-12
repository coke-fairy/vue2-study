<template>
  <div class="app__left">
    <span> left </span>
    <button @click="countUp">vuex count +</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    ...mapActions({
      countUp: 'setCount',
    }),
  },
};
</script>

<style lang="scss" scoped>
.app__left {
  width: 200px;
  min-width: 200px;
  height: 100vh;
  background-color: red;
}
</style>

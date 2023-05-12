<template>
  <div class="app">
    <!-- left -->
    <Left />
    <div class="app__container">
      <!-- header -->
      <Header />
      <div class="app__container__body">
        <div class="app__container__body__content">
          <router-view />
        </div>
        <!-- right -->
        <Right />
      </div>
    </div>
  </div>
</template>

<script>
import { Header, Left, Right } from '@/components/layouts';
export default {
  components: {
    Header,
    Left,
    Right,
  },
};
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  display: flex;

  &__container {
    width: 100%;

    &__body {
      width: 100%;
      height: calc(100% - 50px);
      display: flex;

      &__content {
        width: 80%;
        background-color: aqua;
      }
    }
  }
}
</style>

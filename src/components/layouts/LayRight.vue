<template>
  <div class="app__container__body__right">
    <span>숫자: {{ count }}</span>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      count: 'getCount',
    }),
  },
};
</script>

<style lang="scss" scoped>
.app__container__body__right {
  width: 20%;
  background-color: blue;
}
</style>

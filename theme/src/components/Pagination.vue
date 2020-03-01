<template>
  <nav class="container pagination columns is-mobile">
    <div class="prev-wrap column is-6">
      <saber-link
        class="prev"
        title="PREVIOUS"
        v-if="page.pagination.hasNext"
        :to="page.pagination.nextLink">
        <i class="icon ion-ios-arrow-back"></i>
        <span class="text">PREVIOUS</span>
      </saber-link>
    </div>
    <div class="next-wrap column is-6">
      <saber-link
        class="next"
        title="NEXT"
        v-if="page.pagination.hasPrev"
        :to="page.pagination.prevLink">
        <span class="text">NEXT</span>
        <i class="icon ion-ios-arrow-forward"></i>
      </saber-link>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['page']
}
</script>

<style lang="scss" scoped>
@import '../styles/components/variables';

.pagination {
  .prev-wrap {
    display: flex;
    justify-content: flex-start;
  }
  .next-wrap {
    display: flex;
    justify-content: flex-end;
  }
  a {
    display: flex;
    align-items: center;
    .icon {
      padding-top: 2px;
    }
    .text {
      margin: 0 $gap-s;
    }
  }
}
</style>

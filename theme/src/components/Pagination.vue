<template>
  <nav class="container pagination columns is-mobile">
    <div class="prev-wrap column is-6">
      <saber-link
        class="prev"
        title="PREVIOUS PAGE"
        v-if="page.pagination.hasNext"
        :to="page.pagination.nextLink">
        <span class="text">PREVIOUS</span>
      </saber-link>
    </div>
    <div class="next-wrap column is-6">
      <saber-link
        class="next"
        title="NEXT PAGE"
        v-if="page.pagination.hasPrev"
        :to="page.pagination.prevLink">
        <span class="text">NEXT</span>
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
    color: var(--color-text-primary);
    display: flex;
    align-items: center;

    &:hover {
      color: var(--color-link);
    }

    .icon {
      padding-top: 2px;
    }

    .text {
      margin: 0 $gap-s;
    }
  }
}
</style>

<template>
  <div class="card-box" :style="width ? { width: width + 'px' } : {}">
    <div
      class="card-img"
      :style="imgHeight ? { imgHeight: imgHeight + 'px' } : {}"
    >
      <img src="../../../../src/assets/logo.png" alt="" />
    </div>
    <div v-if="summary" class="card-summary">
      {{ summary }}
    </div>
    <div v-else class="card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
  name: "cardBottom",
  props: {
    width: {
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: "",
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: "",
    },
  },
};
</script>
<style lang="scss" scoped>
@import url("./card.scss");
</style>





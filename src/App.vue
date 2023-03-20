<template>
  <div id="app">
    <card
      :width="500"
      :imgHeight="200"
      summary="范德萨范德萨范德萨范德萨"
    ></card>
    <card summary="阿啦啦啦啦范德萨范德萨">
      <template v-slot:footer
        ><div class="footer">法规的撒法规的撒割发代首割发代首</div></template
      >
    </card>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
.footer {
  text-align: left;
  padding: 8px;
}
</style>

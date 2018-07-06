<template>
  <button type="submit" v-bind:disabled="isdisabled">
    送信
  </button>
</template>

<script>
export default {
  name: "btn",
  props: {
    isdisabled: Boolean
  }
}
</script>

<style lang="scss" scoped>
button {
  appearance: none;
  display: block;
  width: 280px;
  margin: auto;
  background: #4ebdd5;
  border: 1px solid #4ebdd5;
  color: #fff;
  height: 50px;
  margin-top: 50px;
  border-radius: 10px;

  &:hover {
    background: lighten(#4ebdd5, 5%);
  }

  &:disabled {
    border: 1px solid #e2e2e2;
    background: #cac9c9;
  }
}
</style>

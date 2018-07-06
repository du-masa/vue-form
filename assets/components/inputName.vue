<template>
  <div class="form__control">
    <label for="" class="form__label">
      名前<span>必須</span>
    </label>
    <input
      class="form__input"
      v-model="value"
      type="text"
      name="name"
      @input="checkNameValue"
    >
  </div>
</template>

<script>
export default {
  name: "input-name",
  data() {
    return {
      value: '',
    }
  },
  props: {
    data1: String,
    data2: Object,
    data3: Array
  }
  // methods: {
  // }
}
</script>

<style lang="scss" scoped>
// button {
//   appearance: none;
//   display: block;
//   width: 280px;
//   margin: auto;
//   background: #4ebdd5;
//   border: 1px solid #4ebdd5;
//   color: #fff;
//   height: 50px;
//   margin-top: 50px;
//   border-radius: 10px;

//   &:hover {
//     background: lighten(#4ebdd5, 5%);
//   }

//   &:disabled {
//     border: 1px solid #e2e2e2;
//     background: #cac9c9;
//   }
// }
</style>

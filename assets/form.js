import './scss/style.scss';
import Vue from 'vue/dist/vue.esm.js';

document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el: '#form',
    data: function() {
      return {
        name: {
          value: '',
          errorFlag: false,
        },
        gender: 'male',
        kind: 'kind2',
        content: {
          value: '',
          errorFlag: false,
        },
        contentBaseCount: 300
      }
    },
    methods: {
      checkNameValue() {
        this.name.errorFlag = this.name.value === ''
      },
      checkContentValue() {
        this.content.errorFlag = this.content.value === ''
      }
    },
    computed: {
      contentCount() {
        return this.contentBaseCount - this.content.value.length
      },
      isInvalid() {
        return (!this.name.value || this.name.errorFlag) || (!this.content.value || this.content.errorFlag) || this.contentCount < 0
      }
    }
  })
});

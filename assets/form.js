import './scss/style.scss';
import Vue from 'vue/dist/vue.esm.js';

document.addEventListener('DOMContentLoaded', function() {
  new Vue({
    el: '#form',
    data: function() {
      return {
        name: '',
        gender: 'male',
        kind: 'kind2',
        content: '',
        contentBaseCount: 300
      }
    },
    methods: {
    },
    computed: {
      contentCount() {
        return this.contentBaseCount - this.content.value.length
      },
      isInvalid() {
        return !this.name || !this.content || this.contentCount < 0
      }
    }
  })
});

import './scss/style.scss';
import Vue from 'vue/dist/vue.esm.js';
import btn from './components/btn.vue';

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
        return this.contentBaseCount - this.content.length
      },
      isInvalid() {
        return !this.name || !this.content || this.contentCount < 0
      }
    },
    components: {
      'btn': btn
    }
  })
});

import Vue from 'vue';
import Button from './index.vue';

export default {
  install: (app: Vue.App) => {
    app.component(Button.name, Button);
  },
};

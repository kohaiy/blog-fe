import Vue from 'vue';
import ButtonInstall from './k-button/index';

export default {
  install: (app: Vue.App) => {
    app.use(ButtonInstall);
  },
};

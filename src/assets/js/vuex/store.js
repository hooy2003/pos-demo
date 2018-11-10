import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import set from './modules/set';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    app,
    set
  }
});

export default store;
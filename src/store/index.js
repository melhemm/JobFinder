import { createStore } from 'vuex';
import state from './state';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

const store = createStore({
  state,
  mutations,
  actions,
  getters,
  strict: process.env.NODE_ENV !== "production",
})

export default store;

const state = {
  configTab: 'page'
};

const mutations = {
  setConfigTab (state, payload) {
    console.log('a', payload);
    state.configTab = payload;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};

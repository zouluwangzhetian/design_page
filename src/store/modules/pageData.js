const state = {
};

const mutations = {
  // 设置state中sideBar固定状态
  editHover (state, data) {
    state.isHover = data;
  }
};

export default {
  namespaced: true,
  state,
  mutations
};

export default {
  register(context, userId) {
    setTimeout(() => {
      context.commit('register', userId);
    }, 1000);
  },
  unregister({ commit }, userId) {
    commit('unregister', {
      userId: userId
    });
  }
};

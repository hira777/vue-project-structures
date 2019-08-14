import { RepositoryFactory } from "@/repositories/RepositoryFactory";
const PostsRepository = RepositoryFactory.get("posts");

const posts = {
  namespaced: true,
  state: {
    posts: []
  },
  getters: {
    posts: state => state.posts
  },
  actions: {
    async fetch({ commit }) {
      const response = await PostsRepository.get();
      console.log("response", response);
      commit("setPosts", response.data);
    }
  },
  mutations: {
    setPosts(state, payload) {
      state.posts = payload;
    }
  }
};

export default posts;

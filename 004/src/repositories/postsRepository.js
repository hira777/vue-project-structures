import Repository from "./Repository";

const resource = "/posts";

export default {
  get() {
    return Repository.get(`${resource}`);
  },
  getPost(postId) {
    return Repository.get(`${resource}/${postId}`);
  },
  getPostByUserId(userId) {
    return Repository.get(`${resource}?userId=${userId}`);
  },
  post(payload) {
    return Repository.post(`${resource}`, payload);
  }
};

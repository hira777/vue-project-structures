import Repository from "./Repository";

const resource = "/comments";

export default {
  get() {
    return Repository.get(`${resource}`);
  },
  getCommentsByPostId(postId) {
    return Repository.get(`${resource}?postId=${postId}`);
  }
};

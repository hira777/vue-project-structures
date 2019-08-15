import CommentsRepository from "./commentsRepository";
import PostsRepository from "./postsRepository";

const repositories = {
  comments: CommentsRepository,
  posts: PostsRepository
};

export const RepositoryFactory = {
  get: name => repositories[name]
};

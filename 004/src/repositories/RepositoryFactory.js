import PostsRepository from "./postsRepository";

const repositories = {
  posts: PostsRepository
};

export const RepositoryFactory = {
  get: name => repositories[name]
};

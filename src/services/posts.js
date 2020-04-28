import { api } from "./api";

export const getPosts = () => api.posts.browse();
export const getPost = ({ slug }) => api.posts.read({ slug });

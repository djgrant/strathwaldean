import { api } from "./api";

export const getPage = ({ slug }) => api.pages.read({ slug });
export const getPages = () => api.pages.browse();

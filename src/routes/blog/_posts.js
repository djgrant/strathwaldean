import GhostContentAPI from "@tryghost/content-api";
import pick from "lodash/fp/pick";
import map from "lodash/fp/map";

const api = new GhostContentAPI({
  url: "https://strathwaldean.herokuapp.com",
  key: "565856f754856ae4df5e886f48",
  version: "v3",
});

const ghostProps = ["slug", "title", "html", "created_at", "excerpt"];

export const getPosts = () => api.posts.browse().then(map(pick(ghostProps)));

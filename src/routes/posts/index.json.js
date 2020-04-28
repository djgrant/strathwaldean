import pick from "lodash/fp/pick";
import map from "lodash/fp/map";
import { api } from "../../services/api.js";

export async function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  const posts = await api.posts
    .browse()
    .then(map(pick(["slug", "title", "created_at", "excerpt"])));

  res.end(JSON.stringify(posts));
}

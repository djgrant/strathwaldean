import pick from "lodash/fp/pick";
import { api } from "../services/api.js";

export async function get(req, res) {
  const { page } = req.params;
  const post = await api.pages
    .read({ slug: page })
    .then(pick(["slug", "title", "created_at", "html"]));

  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  if (post) {
    return res.end(JSON.stringify(post));
  }

  res.end(
    JSON.stringify({
      message: `Not found`,
    })
  );
}

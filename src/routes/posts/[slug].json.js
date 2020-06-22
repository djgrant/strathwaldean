import pick from "lodash/fp/pick";
import { api } from "../../services/api.js";

export async function get(req, res) {
  const { slug } = req.params;
  const post = await api.posts
    .read({ slug, include: "authors" })
    .then(
      pick([
        "slug",
        "title",
        "created_at",
        "html",
        "feature_image",
        "primary_author",
      ])
    );

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

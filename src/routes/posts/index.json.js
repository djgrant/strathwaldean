import pick from "lodash/fp/pick";
import map from "lodash/fp/map";
import { api } from "../../services/api.js";

export async function get(req, res) {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });

  const posts = await api.posts
    .browse({ include: "tags" })
    .then(
      map(
        pick([
          "slug",
          "title",
          "created_at",
          "excerpt",
          "feature_image",
          "tags",
        ])
      )
    )
    .then((posts) =>
      process.env.NODE_ENV === "development"
        ? posts
        : posts.filter((p) => !p.tags.find((t) => t.name === "draft"))
    );

  res.end(JSON.stringify(posts));
}

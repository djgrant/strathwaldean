import { getPosts } from './_posts.js';

const lookup = new Map();

export async function get(req, res, next) {
	const { slug } = req.params;
	const posts = await getPosts();

	posts.forEach(post => {
		lookup.set(post.slug, JSON.stringify(post));
	});

	if (lookup.has(slug)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(slug));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}

// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
	{
		title: 'An update from the gardening crew',
		slug: 'gardening-crew-update',
		html: `
			<p>Hello!</p>
			<p>You might have noticed that a few of us have been tackling the space between our gardens - a space which was previously overgrown with brambles, but now, miraculously, is not! Hoorah! </p>
			<p>We thought it would be good to let everyone know what’s happening and, if you want to, how to get involved!</p>
			<h3>What’s the grand plan?</h3>
			<p>The aim is to clean up the space and turn it into an area that can be enjoyed by all residents, whilst preserving existing trees and wildlife. This could include a seating area, raised vegetable boxes, bird boxes, an orchard, a BBQ area … There’s loads of possibilities and it’d be great for everyone to share their ideas!</p>
			<h3>What’s next?</h3>
			<p>The next stage is to clear up the rubbish, green waste, and rubble. Once this has been moved out the way we can then prepare the soil with a rotavator. There’s an incredible network of bramble roots under the surface, which (bar a couple of plants we’ll keep for berries) we never want to see grow again - ever!</p>
			<h3>Can I join in?</h3>
			<p>Yes, absolutely! It’d be great to have different people with different skills and ideas working together on this. </p>
			Right now, we are working on cutting up the bramble branches and putting waste into bags, ready for disposal when recycling centres re-open. On Friday-Sunday we will hire a rotavator. It’s heavy work so one person will operate the rotavator for about 20 minutes, while others rake and bag up whatever is left in its wake.</p>
			Please feel free to join in, even if it’s just for a short period. Of course, it’d be best if there’s only a handful of people out in the quad at any one time to enable social distancing, so maybe take a wee peek out your window first to see how busy it is. </p>
			<h3>Do you need money?</h3>
			<p>If you’d like to contribute a small amount, this will be really helpful in helping cover the cost of equipment hire, and, later down the line, materials for building things like benches, pathways, a pizza oven etc.</p>
			<p>As we don’t have a bank account for the quad or anything fancy like that, what we’ll do is ask everyone if they’d like to pledge a small amount and then just collect funds as they are required.</p>
			<p>If you’d like to help in this way, can you please fill out the pledge form at www.strathwaldean.org.uk/pledge. Crucially, this will give us an idea of how much money there is to work with to develop the quad.</p>
		`
	},
];

posts.forEach(post => {
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;

const posts = [
	{
		title: 'An update from the gardening crew',
		slug: 'gardening-crew-update',
		date: '23rd April 2020',
		summary: `
			<p>Today, letters were distributed to all the flats surrounding the quad.</p> 
			<p>The aim was to let folks know what is going on in the quad, but also try to bring the community together...</p>
			`,
		html: `
			<p>Today, letters were distributed to all the flats surrounding the quad.</p> 
			<p>The aim was to let folks know what is going on in the quad, but also try to bring the community together to work towards this common goal. </p>
			<p>The full text of the the letter can be found <a target="_blank" href="https://docs.google.com/document/d/1uTL8MpUPxhRQZTjq4BQtjpvRbm0SODkcw7In0IQO1FM/edit?pli=1">here</a>.</p>
		`
	},
];

posts.forEach(post => {
	post.summary = post.summary.replace(/^\t{3}/gm, '');
	post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;

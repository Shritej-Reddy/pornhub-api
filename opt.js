#!/usr/bin/env node

'use strict';

const porn = require('.');

const url = 'https://www.pornhub.org/view_video.php?viewkey=ph5b8253f657449';

const opt = process.argv[2];

const returnPornData = (source, opts) => {
	return porn(source, opts).then(res => {
		console.log(res);
	});
};

// OPT : title, views, upvotes, downvotes, low, medium, high, provider, percent

returnPornData(url, opt);

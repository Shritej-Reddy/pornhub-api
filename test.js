import test from 'ava';
import m from '.';

const url = 'https://www.pornhub.org/view_video.php?viewkey=ph5b8253f657449';

test('title', async t => {
	const video = await m(url, 'title');

	t.is(video.data, 'Hot kissing scene');
});

import { BlogItem } from '@/entities';
function generateBlogItems() {
	return new Array(15).fill(0).map((val, i) => {
		return (<BlogItem
			key={i}
			text="The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning."
			createdAt={new Date('2021-09-25')}
			tag='Frontend'
			title="Css Grid"
			readTime="3 Min Read"
			postLink="google.com"
			mainPhotoLink='/Blog/blogPost.jpg' />);
	});
}
export default function Home() {
	return (
		<div className='blog'>
			{
				generateBlogItems()
			}
		</div>
	);
}

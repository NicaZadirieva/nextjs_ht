import { BlogItem } from '@/entities';

interface BlogItemResponse {
	title: string;
	body: string;
	id: number;
}
async function generateBlogItems() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
		next: {
			revalidate: 10
		}
	}
	);
	if (!res.ok) {
		return null;
	}
	const data = await res.json();
	
	return data.map((d: BlogItemResponse) => {
		return (<BlogItem
			key={d.id}
			text={d.body}
			createdAt={new Date('2021-09-25')}
			tag='Frontend'
			title={d.title}
			readTime="3 Min Read"
			postLink="google.com"
			mainPhotoLink='/Blog/blogPost.jpg' />);
	});
}
export default async function Home() {
	return (
		<div className='blog'>
			{
				await generateBlogItems()
			}
		</div>
	);
}

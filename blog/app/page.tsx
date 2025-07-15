import { BlogItemResponse, generateBlogItems } from '@/app/api';
import { BlogItem } from '@/entities';
import { notFound } from 'next/navigation';

export default async function Home() {
	const data = await generateBlogItems();
	if (!data) {
		return notFound();
	}
	return (
		<div className='blog'>
			{
				data.map((d: BlogItemResponse) => {
					return (<BlogItem
						key={d.id}
						text={d.body}
						createdAt={new Date('2021-09-25')}
						tag='Frontend'
						title={d.title}
						readTime="3 Min Read"
						postLink="google.com"
						mainPhotoLink='/Blog/blogPost.jpg' />);
				})
			}
		</div>
	);
}

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
						text={d.content}
						createdAt={d.publishedAt}
						tag={d.category}
						title={d.title}
						readTime="3 Min Read"
						slug={d.slug}
						thumbnail={d.thumbnail} />);
				})
			}
		</div>
	);
}

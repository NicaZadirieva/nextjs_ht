
import { notFound } from 'next/navigation';
import { generateBlogItems } from '../api';
import { BlogItemResponse } from '../api/helpers';
import { BlogItem } from './home-components';

export default async function Home() {
	const data = await generateBlogItems();
	if (!data?.blogItems) {
		return notFound();
	}
	return (
		<div className='blog'>
			{
				data?.blogItems?.map((d: BlogItemResponse) => {
					return (<BlogItem
						key={d.id}
						text={d.content}
						createdAt={d.publishedAt}
						tag={d.category}
						title={d.title}
						readTime="3 Min Read"
						slug={d.slug}
						blogId={d.id}
						thumbnail={d.thumbnail} />);
				})
			}
		</div>
	);
}

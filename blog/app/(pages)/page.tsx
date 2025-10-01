
import { notFound } from 'next/navigation';
import { generateBlogItems } from '../api';
import { BlogList } from './home-components/BlogList';

export default async function Home() {
	const data = await generateBlogItems();
	if (!data?.blogItems) {
		return notFound();
	}
	return (
		<BlogList blogItems={data.blogItems}/>
	);
}

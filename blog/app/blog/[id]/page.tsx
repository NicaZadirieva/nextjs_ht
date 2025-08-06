import { BlogItemResponse, generateBlogItems } from '@/app/api';
import { generateBlogPostItem } from '@/app/api/blog/id';
import { notFound } from 'next/navigation';

type Params = {
    params: {
        id: number
    }
}
export async function generateStaticParams(): Promise<Array<{ id: number }>> {
	const posts = await generateBlogItems();
	return posts.map((post: BlogItemResponse) => ({
		id: post.id.toString() /**может возвращать только строки */
	}));
}
export default async function BlogPost({ params }: Params) {
	const res = await generateBlogPostItem(params.id);

	if (!res) {
		return notFound();
	}
	return (
		<>{res.content}</>
	);
}

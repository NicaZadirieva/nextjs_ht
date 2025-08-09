
import { generateBlogItems, generateBlogPostItem } from '@/app/api/blog';
import { BlogItemResponse } from '@/app/api/helpers';
import { notFound } from 'next/navigation';
import { BlogPostParams } from './BlogPostParams.interface';
import { BlogPost } from './components';


export async function generateStaticParams(): Promise<Array<{ id: string }> | undefined> {
	const posts = await generateBlogItems();
	return posts?.blogItems?.map((post: BlogItemResponse) => ({
		id: post.id.toString() /**может возвращать только строки */
	}));
}
export default async function BlogPostPage({ params }: BlogPostParams) {
	const { id } = await params;
	const res = await generateBlogPostItem(id);

	if (!res) {
		return notFound();
	}
	
	return (
		<BlogPost blogPostData={res} />
	);
}

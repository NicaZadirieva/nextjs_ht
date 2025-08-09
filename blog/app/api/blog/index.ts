import { API } from '@/app/api/helpers';
import { BlogPostResponse } from '../helpers/interfaces/BlogPostResponse.interface';


export async function generateBlogItems(): Promise<BlogPostResponse | null> {
	const res = await fetch(API.blog.getAll, {
		next: {
			revalidate: 10
		}
	}
	);
	if (!res.ok) {
		return null;
	}
	const data = await res.json();
	return data;
}
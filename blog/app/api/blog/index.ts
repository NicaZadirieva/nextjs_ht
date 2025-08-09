import { API } from '../api.constants';

export interface BlogItemResponse {
    title: string;
    content: string;
    id: number;
	slug: string;
	publishedAt: string;
	category: string;
	thumbnail: string;
	image: string;
}
export async function generateBlogItems() {
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
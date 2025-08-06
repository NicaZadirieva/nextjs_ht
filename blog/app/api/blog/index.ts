
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
	const res = await fetch('https://jsonplaceholder.org/posts', {
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
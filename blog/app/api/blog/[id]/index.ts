
export interface BlogPostResponse {
    title: string;
    body: string;
    id: number;
}
export async function generateBlogPostItem() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts/:id', {
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
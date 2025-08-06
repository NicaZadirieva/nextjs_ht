
export interface BlogPostResponse {
	title: string;
	content: string;
	id: number;
	slug: string;
	publishedAt: string;
	category: string;
	thumbnail: string;
	image: string;
}
export async function generateBlogPostItem(id: number) {
	const res = await fetch(`https://jsonplaceholder.org/posts?id=${id}`
	);
	if (!res.ok) {
		return null;
	}

	const allData = await res.json();

	return (allData as BlogPostResponse[]).filter((post) => post.id == id)[0];
}
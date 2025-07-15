
export interface BlogItemResponse {
    title: string;
    body: string;
    id: number;
}
export async function generateBlogItems() {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
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
import { API } from '@/app/api/helpers';
import { BlogItemResponse } from '../../helpers/interfaces/BlogItemResponse.interface';
import { BlogPostResponse } from '../../helpers/interfaces/BlogPostResponse.interface';


export async function generateBlogPostItem(id: number): Promise<BlogPostResponse | null>{
	const res = await fetch(`${API.blog.findOneById}${id}`
	);
	if (!res.ok) {
		return null;
	}

	const allData = await res.json();

	return allData.filter((post: BlogItemResponse) => post.id == id)[0];
}
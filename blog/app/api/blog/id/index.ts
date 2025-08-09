import { API } from '@/app/api/helpers';
import { BlogItemResponse } from '../../helpers/interfaces/BlogItemResponse.interface';


export async function generateBlogPostItem(id: number): Promise<BlogItemResponse | null>{
	const res = await fetch(`${API.blog.findOneById}${id}`
	);
	if (!res.ok) {
		return null;
	}

	const allData = await res.json();

	return allData.filter((post: BlogItemResponse) => post.id == id)[0];
}
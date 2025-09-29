import { API } from '../../helpers';
import { CommentResponse } from '../../helpers/interfaces/CommentResponse.interface';

export async function generateCommentByBlogId(blogId: number): Promise<CommentResponse[] | null>{
	const res = await fetch(`${API.comment.getByBlogId}`
	);
	if (!res.ok) {
		return null;
	}

	const allData = await res.json();

	return allData.filter((d: CommentResponse) => d.postId == blogId);
}
// TODO: нужно заменить на любой другой с получением постов
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function patchRequestUpdateLike(newLikeState: boolean, postId: number) {
	// данный запрос закомментировала, так как присылает ошибку. всегда
	// return axios.patch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
	// 	body: JSON.stringify({
	// 		//title: newLikeState ? 'liked' : 'not liked' /**заглушка */
	// 	}),
	// 	headers: {
	// 		'Content-type': 'application/json; charset=UTF-8'
	// 	}
	// }
	// );
	return testSuccessfulRequest();
}

async function testSuccessfulRequest() {
	return Promise.resolve();
}
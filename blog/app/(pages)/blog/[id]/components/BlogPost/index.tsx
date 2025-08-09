'use client';

import { useState } from 'react';
import { Like } from '../Like';

export const BlogPost = () => {
	const [postLike, setPostLike] = useState(false);
	return (
		<Like width={20} height={20} liked={postLike} updateLike={(like) => {setPostLike(like);}}/>
	);
};
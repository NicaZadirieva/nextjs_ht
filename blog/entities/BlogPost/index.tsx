'use client';

import { Like } from '@/feature';
import { useState } from 'react';

export const BlogPost = () => {
	const [postLike, setPostLike] = useState(false);
	return (
		<Like width={20} height={20} liked={postLike} updateLike={(like) => {setPostLike(like);}}/>
	);
};
'use client';
import { useState } from 'react';
import { Like } from '../../../Like';
import styles from './index.module.css';

export const BlogPostLike = () => {
	const [postLike, setPostLike] = useState(false);
	return (
		<div className={styles['blog-post-body-like']}>
			<span>Понравилось? Жми</span><Like width={20} height={20} liked={postLike} updateLike={(like) => { setPostLike(like); }} />
		</div>
	);
	
};
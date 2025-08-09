'use client';

import { BlogCreatedAt, BlogLike, BlogReadTime, BlogTag } from '@/app/shared';
import cn from 'classnames';
import { useState } from 'react';
import { Like } from '../Like';
import { BlogPostProps } from './BlogPost.props';
import styles from './index.module.css';
import { BlogTitle } from './ui/BlogTitle';

export const BlogPost = ({ blogPostData, className, ...props }: BlogPostProps) => {
	const [postLike, setPostLike] = useState(false);
	return (
		<div {...props} className={cn(className, styles['blog-post'])}>
			<BlogTitle title={blogPostData.title}/>
			<div className={styles['blog-post-meta']}>
				<BlogTag tag={'Frontend' /**от api не получаю тега */}/>
				<span>·</span>
				<BlogCreatedAt createdAt={blogPostData.publishedAt}/>
				<span>·</span>
				<BlogReadTime readTime={'3 минуты' /**от api не получаю время прочтения */}/>
				<span>·</span>
				<BlogLike className={styles['blog-post-meta-like']}/>
			</div>
			<Like width={20} height={20} liked={postLike} updateLike={(like) => { setPostLike(like); }} />
		</div>
		
	);
};
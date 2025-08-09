'use client';

import { BlogCreatedAt, BlogImage, BlogLike, BlogReadTime, BlogTag } from '@/app/shared';
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
				<BlogTag tag={'Frontend' /**от api не получаю тега */} />
				<span>·</span>
				<BlogCreatedAt createdAt={blogPostData.publishedAt} />
				<span>·</span>
				<BlogReadTime readTime={'3 минуты' /**от api не получаю время прочтения */} />
				<span>·</span>
				<BlogLike className={styles['blog-post-meta-like']} />
			</div>
			<div className={styles['blog-post-body']}>
				<BlogImage width={687} height={440} alt={blogPostData.title} thumbnail={blogPostData.thumbnail /**почему-то только thumbnail показывается, а img - нет */} />
				<div dangerouslySetInnerHTML={{ __html: blogPostData.content}}/>
				<div className={styles['blog-post-body-like']}>
					<span>Понравилось? Жми</span><Like width={20} height={20} liked={postLike} updateLike={(like) => { setPostLike(like); }} />
				</div>
			</div>
			
			
		</div>
		
	);
};
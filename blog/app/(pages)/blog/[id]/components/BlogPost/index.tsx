
import { generateCommentByBlogId } from '@/app/api/comment';
import { BlogCreatedAt, BlogImage, BlogLike, BlogReadTime, BlogTag } from '@/app/shared';
import cn from 'classnames';
import { BlogPostProps } from './BlogPost.props';
import styles from './index.module.css';
import { BlogComment } from './ui/BlogComment';
import { BlogForm } from './ui/BlogForm';
import { BlogPostLike } from './ui/BlogPostLike';
import { BlogTitle } from './ui/BlogTitle';

export const BlogPost = async ({ blogPostData, className, ...props }: BlogPostProps) => {
	const res = await generateCommentByBlogId(blogPostData.id);

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
				<BlogPostLike/>
				<div className={styles['blog-post-body-comments']}>
					<BlogTitle title={'Комментарии'} />
					{res?.map((comment) => {
						return (
							<BlogComment key={comment.id} authorId={comment.userId} className={styles['blog-post-body-comment']} commentBody={comment.comment}/>
						);

					})}

					
				</div>
				<BlogForm/>

			</div>
			
			
		</div>
		
	);
};
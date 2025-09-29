import { generateUserById } from '@/app/api/user/undex';
import cn from 'classnames';
import { notFound } from 'next/navigation';
import { BlogCommentProps } from './BlogComment.props';
import styles from './index.module.css';

export const BlogComment = async ({commentBody, authorId, className, ...props} : BlogCommentProps) => {
	const res = await generateUserById(authorId);
	if (!res) {
		// исправить на ошибку
		return notFound();
	}
	return (
		<div {...props} className={cn(className, styles['blog-post-body-comment'])}>
			<span className={styles['comment-author']}>
				{res.firstname} {res.lastname}
			</span>
			<span className={styles['dot']}>·</span>
			<span className={styles['comment-author-email']}>
				{res.email}
			</span>
			<div className={styles['comment-body']}>
				{commentBody}
			</div>
		</div>
	);
};
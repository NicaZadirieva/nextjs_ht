import cn from 'classnames';
import { BlogCommentProps } from './BlogComment.props';
import styles from './index.module.css';

export const BlogComment = ({commentAuthor, commentBody, emailAuthor, className, ...props} : BlogCommentProps) => {
	return (
		<div {...props} className={cn(className, styles['blog-post-body-comment'])}>
			<span className={styles['comment-author']}>
				{commentAuthor}
			</span>
			<span className={styles['dot']}>·</span>
			<span className={styles['comment-author-email']}>
				{emailAuthor}
			</span>
			<div className={styles['comment-body']}>
				{commentBody}
			</div>
		</div>
	);
};
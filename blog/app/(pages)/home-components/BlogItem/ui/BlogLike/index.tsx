import { BlogLikeProps } from './BlogLike.props';
import styles from './index.module.css';
import LikeIcon from './like-post-icon.svg';

export const BlogLike = ({likeCounter = 0}: BlogLikeProps) => {
	return (
		<div className={styles.like}>
			<span>{likeCounter}</span>
			<LikeIcon />
		</div>
	);
};
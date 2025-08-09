import cn from 'classnames';
import { BlogLikeProps } from './BlogLike.props';
import styles from './index.module.css';
import LikeIcon from './like-post-icon.svg';

/**TODO: сделать кликабельной */
export const BlogLike = ({className, likeCounter = 0}: BlogLikeProps) => {
	return (
		<div className={cn(className, styles.like)}>
			<span>{likeCounter}</span>
			<LikeIcon />
		</div>
	);
};
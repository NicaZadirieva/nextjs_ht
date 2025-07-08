import cs from 'classnames';
import { LikeProps } from './Like.props';
import PostLikeIcon from './icon/like-icon.svg';
import styles from './index.module.css';

export const Like = (props: LikeProps) => {
	return (
		<div className={cs(styles['like-box'], {
			[styles['liked-box']]: props.liked
		})}>
			<PostLikeIcon width={props.width} height={props.height}/>
		</div>
	);
};
'use client';
import cs from 'classnames';
import { useCallback, useState } from 'react';
import { LikeProps } from './Like.props';
import { patchRequestUpdateLike } from './api/updateLike';
import PostLikeIcon from './icon/like-icon.svg';
import styles from './index.module.css';

export const Like = (props: LikeProps) => {
	const [liked, setLiked] = useState(props.liked);

	const onClickHandler = useCallback(async () => {
		const newLikeState = !liked;
		// try to send request...
		await patchRequestUpdateLike(newLikeState, 1)
			.then(() => {
				// request successful
				console.log('Request to update like state is successful');
				setLiked(newLikeState);
				props.updateLike(newLikeState);
			})
			.catch((e) => {
				console.error('Request to update like state was sent with error', e);
			});
	}, [liked, props]);

	return (
		<div className={cs(styles['like-box'], {
			[styles['liked-box']]: liked
		})}
		onClick={() => { onClickHandler();}}>
			<PostLikeIcon width={props.width} height={props.height}/>
		</div>
	);
};
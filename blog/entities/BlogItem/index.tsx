import { BlogImage } from '@/feature/BlogImage';
import cn from 'classnames';
import { BlogItemProps } from './BlogItem.props';
import ArrowIcon from './icon/icon_arrow.svg';
import LikeIcon from './icon/like-post-icon.svg';
import styles from './index.module.css';
import { daysBetweenNow } from './utils/DateUtil';

export const BlogItem = ({className, text, likeCounter = 0, tag, createdAt, title, readTime, postLink, mainPhotoLink, ...props}: BlogItemProps) => {
	return (
		<div {...props} className={cn(styles.card, className)}>
			<BlogImage mainPhotoLink={mainPhotoLink}/>
			<div className={styles.content}>
				<header className={styles.header}>
					<span className={styles.tag}>
						{tag}
					</span>
					<span>·</span>
					<span className={styles['created-at']}>
						{daysBetweenNow(createdAt) } days
					</span>
					<div className={styles.like}>
						<span>{likeCounter}</span>
						<LikeIcon/>
					</div>
				</header>

				<main className={styles.main}>
					<h2 className={styles.title}>{title}</h2>
					<p className={styles.text}>{text}</p>
				</main>

				<footer className={styles.footer}>
					<span className={styles['read-time']}>
						{readTime}
					</span>

					<a className={styles['post-link']} href={postLink}>Read Full
						<ArrowIcon/>
					</a>
				</footer>
			</div>
		</div>
	);
};
import { BlogCreatedAt, BlogImage, BlogLike, BlogReadTime, BlogTag } from '@/feature';
import cn from 'classnames';
import { BlogItemProps } from './BlogItem.props';
import ArrowIcon from './icon/icon_arrow.svg';
import styles from './index.module.css';

export const BlogItem = ({className, text, likeCounter, tag, createdAt, title, readTime, postLink, mainPhotoLink, ...props}: BlogItemProps) => {
	return (
		<div {...props} className={cn(styles.card, className)}>
			<BlogImage mainPhotoLink={mainPhotoLink}/>
			<div className={styles.content}>
				<header className={styles.header}>
					<BlogTag tag={tag}/>
					<span>·</span>
					<BlogCreatedAt createdAt={createdAt} />
					<BlogLike likeCounter={likeCounter}/>
				</header>

				<main className={styles.main}>
					<h2 className={styles.title}>{title}</h2>
					<p className={styles.text}>{text}</p>
				</main>

				<footer className={styles.footer}>
					<BlogReadTime readTime={readTime}/>

					<a className={styles['post-link']} href={postLink}>Read Full
						<ArrowIcon/>
					</a>
				</footer>
			</div>
		</div>
	);
};
import cn from 'classnames';
import Link from 'next/link';
import { BlogItemProps } from './BlogItem.props';
import ArrowIcon from './icon/icon_arrow.svg';
import styles from './index.module.css';
import { BlogCreatedAt, BlogImage, BlogLike, BlogReadTime, BlogTag } from './ui';

export const BlogItem = ({ className, blogId,  text, likeCounter, tag, createdAt, title, readTime, thumbnail, ...props}: BlogItemProps) => {
	return (
		<div {...props} className={cn(styles.card, className)}>
			<BlogImage thumbnail={thumbnail}/>
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

					<Link href={`/blog/${blogId}`} className={styles['post-link']}>Read Full
						<ArrowIcon/>
					</Link>
				</footer>
			</div>
		</div>
	);
};
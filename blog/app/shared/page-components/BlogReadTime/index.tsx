import { BlogReadTimeProps } from './BlogReadTime.props';
import styles from './index.module.css';

export const BlogReadTime = ({ readTime }: BlogReadTimeProps) => {
	return (
		<span className={styles['read-time']}>
			{readTime}
		</span>
	);
};
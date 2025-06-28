import { BlogCreatedAtProps } from './BlogCreatedAt.props';
import styles from './index.module.css';

export const BlogCreatedAt = ({ createdAt }: BlogCreatedAtProps) => {
	return (
		<span className={styles['created-at']}>
			{daysBetweenNow(createdAt)} days
		</span>
	);
};

function daysBetweenNow(startDate: Date) {
	const millisecondsPerDay = 24 * 60 * 60 * 1000;
	return Math.round((Date.now() - startDate.getMilliseconds()) / millisecondsPerDay);
}
import { BlogTagProps } from './BlogTag.props';
import styles from './index.module.css';

export const BlogTag = ({tag} : BlogTagProps) => {
	return (
		<span className={styles.tag}>
			{tag}
		</span>
	);
};
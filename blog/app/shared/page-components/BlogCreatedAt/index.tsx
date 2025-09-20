import { formatDistance, parse } from 'date-fns';
import { ru } from 'date-fns/locale';
import { BlogCreatedAtProps } from './BlogCreatedAt.props';
import styles from './index.module.css';

export const BlogCreatedAt = ({ createdAt }: BlogCreatedAtProps) => {
	return (
		<span className={styles['created-at']}>
			{formatDistance(parse(createdAt, 'dd/MM/yyyy HH:mm:ss', new Date()), new Date(), { locale: ru, addSuffix: true })}
		</span>
	);
};
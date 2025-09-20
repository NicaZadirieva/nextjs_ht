import cn from 'classnames';
import { BlogTitleProps } from './BlogTitle.props';
import styles from './index.module.css';

export const BlogTitle = ({ title, className, ...props }: BlogTitleProps) => {
	return (
		<h2 className={cn(className, styles['blog-title'])} {...props}>{title}</h2>
	);
};
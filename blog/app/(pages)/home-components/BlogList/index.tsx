import { BlogItemResponse } from '@/app/api/helpers';
import cn from 'classnames';
import { BlogListProps } from './BlogList.props';
import styles from './index.module.css';
import { BlogItem } from './ui/BlogItem';

export const BlogList = ({blogItems, className, ...props}: BlogListProps) => {
	return (
		<div {...props} className={cn(className, styles['blog'])}>
			{
				blogItems.map((d: BlogItemResponse) => {
					return (<BlogItem
						key={d.id}
						text={d.content}
						createdAt={d.publishedAt}
						tag={d.category}
						title={d.title}
						readTime="3 Min Read"
						slug={d.slug}
						blogId={d.id}
						thumbnail={d.thumbnail} />);
				})
			}
		</div>
	);
};
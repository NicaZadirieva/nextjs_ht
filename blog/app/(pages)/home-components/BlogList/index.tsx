'use client';
import { BlogItemResponse } from '@/app/api/helpers';
import cn from 'classnames';
import { motion, Variants } from 'framer-motion';
import { BlogListProps } from './BlogList.props';
import styles from './index.module.css';
import { BlogItem } from './ui/BlogItem';

export const BlogList = ({ blogItems, className, ...props }: BlogListProps) => {

	const containerVariants: Variants = {
		hidden: {},
		visible: {
			transition: {
				staggerChildren: 0.15
			}
		}
	};

	const itemVariants: Variants = {
		hidden: {
			opacity: 0,
			y: 50,
			scale: 0.8
		},
		visible: (index: number) => ({
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				delay: index * 0.1,
				duration: 0.6,
				ease: 'easeOut'
			}
		})
	};

	return (
		<motion.div
			{...props}
			className={cn(className, styles.blog)}
			initial="hidden"
			animate="visible"
			variants={containerVariants}
		>
			{blogItems.map((d: BlogItemResponse, index) => (
				<BlogItem
					key={d.id}
					variants={itemVariants}
					custom={index}
					initial="hidden"
					animate="visible"
					text={d.content}
					createdAt={d.publishedAt}
					tag={d.category}
					title={d.title}
					readTime="3 Min Read"
					slug={d.slug}
					blogId={d.id}
					thumbnail={d.thumbnail}
				/>
			))}
		</motion.div>
	);
};

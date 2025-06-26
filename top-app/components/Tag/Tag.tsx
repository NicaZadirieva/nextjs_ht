import cn from 'classnames';
import { JSX } from 'react';
import styles from './Tag.module.css';
import { TagProps } from './Tag.props';

export const Tag = ({ size, color, href, children, className, ...props }: TagProps): JSX.Element => {
	return (
		<div {...props} className={cn(styles.tag, className, {
			[styles.s]: size == 's',
			[styles.m]: size == 'm',
			[styles.ghost] : color == 'ghost',
			[styles.red]: color == 'red',
			[styles.primary]: color == 'primary',
			[styles.green]: color == 'green',
			[styles.grey]: color == 'grey'
		})}
		>
			{href && <a href={href}>{children}</a>}
			{!href && children}
		</div>
	);
};
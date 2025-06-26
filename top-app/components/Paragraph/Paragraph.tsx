import cn from 'classnames';
import { JSX } from 'react';
import styles from './Paragraph.module.css';
import { ParagraphProps } from './Paragraph.props';

export const Paragraph = ({ size, children, className, ...props }: ParagraphProps): JSX.Element => {
	return (
		<p {...props} className={cn(styles.paragraph, className, {
			[styles.s]: size == 's',
			[styles.m]: size == 'm',
			[styles.l]: size == 'l'
		})}
		>
			{children}
		</p>
	);
};
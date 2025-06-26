import cn from 'classnames';
import { JSX } from 'react';
import styles from './Paragraph.module.css';
import { ParagraphProps } from './Paragraph.props';

export const Paragraph = ({ sizeInPx = 16, lineHeight = '24px', children, className, ...props }: ParagraphProps): JSX.Element => {
	return (
		<p {...props} className={cn(styles.paragraph, className)}
			style={{fontSize: `${sizeInPx}px`,
				lineHeight: `${lineHeight}`}}>
			{children}
		</p>
	);
};
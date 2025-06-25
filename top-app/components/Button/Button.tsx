import cn from 'classnames';
import { JSX } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button = ({ appearance, children, className, ...props }: ButtonProps): JSX.Element => {
	return (
		<button {...props} className={cn(styles.button, className, {
			[styles.primary]: appearance == 'primary',
			[styles.ghost]: appearance == 'ghost'
		})}>
			{children}
		</button>
	);
};
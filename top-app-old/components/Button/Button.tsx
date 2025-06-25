import cn from 'classnames';
import Image from 'next/image';
import { JSX } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button = ({ appearance, children, className, arrow = 'none', ...props }: ButtonProps): JSX.Element => {
	return (
		<button {...props} className={cn(styles.button, className, {
			[styles.primary]: appearance == 'primary',
			[styles.ghost]: appearance == 'ghost'
		})}>
			{children}
			{arrow != 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow == 'down'
			})}>
				<Image width="6" height="10" alt="Иконка" src="/arrow.svg"/>
			</span>}
		</button>
	);
};
import cn from 'classnames';
import { forwardRef, Ref } from 'react';
import { InputProps } from './Input.props';
import styles from './index.module.css';

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className, type = 'text', placeholder, ...props }, ref: Ref<HTMLInputElement>) => {
		return <input ref={ref} {...props} className={cn(className, styles.input)} type={type} placeholder={placeholder} />;
	});

Input.displayName = 'Input';
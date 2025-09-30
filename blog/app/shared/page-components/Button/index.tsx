import cn from 'classnames';
import { ButtonProps } from './Button.props';
import styles from './index.module.css';

export const Button = ({ className, type='button', children, ...props}: ButtonProps) => {
	return <button {...props} type={type} className={cn(className, styles.button)}>{children}</button>; 
};
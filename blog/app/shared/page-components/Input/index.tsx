import cn from 'classnames';
import { InputProps } from './Input.props';
import styles from './index.module.css';

export const Input = ({className, type='text', placeholder, ...props}: InputProps) => {
	return <input {...props} className={cn(className, styles.input)} type={type} placeholder={placeholder} />;
};
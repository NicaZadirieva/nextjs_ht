import cn from 'classnames';
import styles from './index.module.css';
import { TextareaProps } from './Textarea.props';

export const Textarea = ({className, placeholder, ...props}: TextareaProps) => {
	return <textarea {...props} className={cn(className, styles.textarea)} placeholder={placeholder}></textarea>;
};
import cn from 'classnames';
import { forwardRef, Ref } from 'react';
import styles from './index.module.css';
import { TextareaProps } from './Textarea.props';

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({className, errors, placeholder, ...props}, ref: Ref<HTMLTextAreaElement>) => {
	return (
		<>
			<textarea ref={ref} {...props} className={cn(className, styles.textarea)} placeholder={placeholder}></textarea>
			{errors && errors.message}
		</>);
	
});

Textarea.displayName = 'Textarea';
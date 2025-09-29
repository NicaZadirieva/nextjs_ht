import cn from 'classnames';
import { BlogFormProps } from './BlogForm.props';
import styles from './index.module.css';

export const BlogForm = ({ className, ...props}: BlogFormProps) => {
	return (
		<form {...props} className={cn(className, styles.form)}>
			<input className={styles.input} type="text" placeholder='Имя'/>
			<textarea className={styles.textarea} placeholder='Комментарий'></textarea>
			<button className={styles.submit} type="submit">Отправить</button>
		</form>);
};
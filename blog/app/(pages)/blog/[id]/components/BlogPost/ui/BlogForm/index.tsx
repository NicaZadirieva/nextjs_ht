import { Button, Input, Textarea } from '@/app/shared';
import cn from 'classnames';
import { BlogFormProps } from './BlogForm.props';
import styles from './index.module.css';

export const BlogForm = ({ className, ...props}: BlogFormProps) => {
	return (
		<form {...props} className={cn(className, styles.form)}>
			<Input placeholder='Имя'/>
			<Textarea placeholder='Комментарий'/>
			<Button className={styles.submit} type="submit">Отправить</Button>
		</form>);
};
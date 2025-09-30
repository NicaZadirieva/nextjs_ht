'use client';
import { Button, Input, Textarea } from '@/app/shared';
import cn from 'classnames';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IBlogForm } from './BlogForm.interface';
import { BlogFormProps } from './BlogForm.props';
import styles from './index.module.css';


export const BlogForm = ({ className, ...props}: BlogFormProps) => {
	const { formState: { errors }, register, handleSubmit, reset } = useForm({
		defaultValues: {
			name: '',
			comment: ''
		}
	});

	const onSubmit: SubmitHandler<IBlogForm> = (data) => {
		console.log(data);
		reset();
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} {...props} className={cn(className, styles.form)}>
			<Input errors={errors.name} {...register('name', { required: 'Поле должно быть заполнено' })} placeholder='Имя'/>
			<Textarea errors={errors.comment} {...register('comment', { required: 'Поле должно быть заполнено' })} placeholder='Комментарий'/>
			<Button className={styles.submit} type="submit">Отправить</Button>
		</form>);
};
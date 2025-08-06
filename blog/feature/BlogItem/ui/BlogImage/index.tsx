import { BlogImageProps } from './BlogImage.props';

export const BlogImage = ({ thumbnail }: BlogImageProps) => {
	return (
		<img width={330} height={200} src={thumbnail.replace('&text=jsonplaceholder.org', '')} alt='Изображение поста'/>
	);
};
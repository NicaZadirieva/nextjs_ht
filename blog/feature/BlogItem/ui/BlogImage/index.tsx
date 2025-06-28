import Image from 'next/image';
import { BlogImageProps } from './BlogImage.props';

export const BlogImage = ({ mainPhotoLink }: BlogImageProps) => {
	return (
		<Image width={330} height={200} src={mainPhotoLink} alt='Изображение поста'/>
	);
};
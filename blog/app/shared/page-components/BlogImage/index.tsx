import { BlogImageProps } from './BlogImage.props';

export const BlogImage = ({ thumbnail, width, height, alt }: BlogImageProps) => {
	return (
		<img width={width} height={height} src={thumbnail.replace('&text=jsonplaceholder.org', '')} alt={alt}/>
	);
};
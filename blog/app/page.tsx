import { BlogItem } from '@/entities';

export default function Home() {
	return (
		<div>
			<BlogItem 
				text="The CSS Grid Layout Module offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning." 
				createdAt={new Date()}
				tag='Frontend'
				title="Css Grid"
				readTime="3 Min Read"
				postLink="google.com"
				mainPhotoLink='/Blog/blogPost.jpg'/>
		</div>
	);
}

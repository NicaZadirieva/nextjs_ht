import { generateBlogPostItem } from '@/app/api/blog/id';
import { notFound } from 'next/navigation';

type Params = {
    params: {
        id: number
    }
}

export default async function BlogPost({ params }: Params) {
	const { id } = await params;
	const res = await generateBlogPostItem(id);

	if (!res) {
		return notFound();
	}
	return (
		<>{res.content}</>
	);
}

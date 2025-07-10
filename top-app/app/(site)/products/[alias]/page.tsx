import { getPage } from '@/api/page';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
// export const metadata: Metadata = {
// 	title: 'Исправленные данные',
// 	description: 'Мой текст'
// };

export async function generateMetadata(): Promise<Metadata> {
	// fetch request
	return {
		title: 'ComputedMetadata'
	};
}


export default async function PageProducts({ params }: { params: {alias: string}}) {
	const page = await getPage(params.alias);
	if (!page) {
		notFound();
	}
	return (<main>
        Страница продукты c alias {page.title}
	</main>
	);
}

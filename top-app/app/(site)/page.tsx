import { getMenu } from '@/api/menu';
import { Metadata } from 'next';

// export const metadata: Metadata = {
// 	title: 'Исправленные данные',
// 	description: 'Мой текст'
// };

export async function generateMetadata() : Promise<Metadata>{
	// fetch request
	return {
		title: 'ComputedMetadata'
	};
}


export default async function Home() {
	const menu = await getMenu(1);
	return (<main>
		Главная
		<div>
			<div>{JSON.stringify(menu)}</div>
		</div>
	</main>
	);
}

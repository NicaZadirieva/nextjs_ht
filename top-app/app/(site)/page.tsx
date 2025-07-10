import type { MenuItem } from '@/interfaces/menu.interface';
import { Metadata } from 'next';
import { API } from '../api';

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


async function getMenu(firstCategory: number): Promise<MenuItem[]> {
	const res = await fetch(API.topPage.find, {
		method: 'POST',
		body: JSON.stringify({
			firstCategory
		}),
		headers: { 'Content-Type': 'application/json' }
	});
	return res.json();
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

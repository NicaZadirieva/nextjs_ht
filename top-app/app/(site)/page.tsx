import { Metadata } from 'next';
import Menu from './components/Menu';

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
	return (<main>
		Главная
		<Menu/>
	</main>
	);
}

import { Button, HTag } from '@/components';
import { Metadata } from 'next';
import Arrow from './arrow.svg';

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
export default function Home() {
	return (<>
		<Button appearance='primary'>Кнопка</Button>
		<Button appearance='ghost'>Кнопка</Button>

		<HTag tag="h1">
			Text
		</HTag>
		<span><Arrow /></span>
	</>
	);
}

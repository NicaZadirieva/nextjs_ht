import { HTag } from '@/components';
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
export default function Home() {
	return (
		<HTag tag="h1">
			Text
		</HTag>
	);
}

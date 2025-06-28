import { Button, HTag, Paragraph, Rating, Tag } from '@/components';
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
		<Paragraph size='m'>Студенты освоят не только hard skills, необходимые для работы веб-дизайнером, но и soft skills — навыки, которые позволят эффективно взаимодействовать в команде с менеджерами, разработчиками и маркетологами. Выпускники факультета могут успешно конкурировать с веб-дизайнерами уровня middle.</Paragraph>
		<Paragraph size='s'>Напишу сразу в двух курсах, так как проходил оба. Java будет многим непросвещённым сложновата в изучении, но здесь перевес из-за лидирующего положения языка как самого популярного в программировании. Выбор мой пал на эту профессию еще и потому, что Java-разработчики получают самую большую зарплату. Хотя Python начинает догонять Java по многим моментам, но вот в крупном екоме разработке Джава все-таки остается главенствующей сейчас. Скажу так – полнота программы и интенсивность присуща обоим курсам GeekBrains. Хочу отметить, что с первого дня занятий вы приступаете к практике и получаете опыт коммерческой разработки уже в свое резюме. Скажу вам как прошедший это – реально помогло в трудоустройстве!</Paragraph>
		<Tag size='s' color='ghost'>Мал</Tag>
		<Tag size='m' color='green'>Мал</Tag>
		<Tag size='m' color='red'>Red</Tag>
		<Tag size='s' color='primary'>primary</Tag>
		<Paragraph size='l'>Выше указаны программы Adobe InDesign, Adobe Illustrator, Corel Draw и ими можно успешно пользоваться дома или в дороге. Современные ноутбуки хорошо справляются с нагрузкой, так зачем загонять специалиста в душный офис. В этой профессии важным считается вдохновение, поэтому дизайнеры ищут его в разных местах.</Paragraph>
		<Rating rating={4} isEditable={true}/>
	</>
	);
}

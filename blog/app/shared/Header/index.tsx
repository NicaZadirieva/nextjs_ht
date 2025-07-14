import cn from 'classnames';
import { Open_Sans } from 'next/font/google';
import GithubIcon from './icon/icon_github.svg';
import styles from './index.module.css';



const openSans = Open_Sans({ subsets: ['latin'] });

export const Header = () => {
	return (
		<header className={styles.header}>
			<h1 className={cn(styles.h1, openSans.className)}>.my_blog</h1>
			<a title="Ссылка на гит" href="#">
				<GithubIcon width={30} height={30}/>
			</a>
		</header>
	);
};
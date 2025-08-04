'use client';
import { BaseContext } from '@/app/context';
import cn from 'classnames';
import { Open_Sans } from 'next/font/google';
import { useContext } from 'react';
import GithubIcon from './icon/icon_github.svg';
import styles from './index.module.css';



const openSans = Open_Sans({ subsets: ['latin'] });

export const Header = () => {
	const baseContext = useContext(BaseContext);
	return (
		<header className={styles.header}>
			<h1 className={cn(styles.h1, openSans.className)}>.my_blog</h1>
			<a title="Ссылка на гит" href={baseContext.GITHUB_URL}>
				<GithubIcon width={30} height={30} />
			</a>
		</header>
	);
};
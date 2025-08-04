'use client';
import { BaseContextProvider } from '@/app/context';
import cn from 'classnames';
import { Open_Sans } from 'next/font/google';
import styles from './index.module.css';
import { GithubUrl } from './ui/GithubUrl';



const openSans = Open_Sans({ subsets: ['latin'] });

export const Header = () => {
	return (
		<BaseContextProvider>
			<header className={styles.header}>
				<h1 className={cn(styles.h1, openSans.className)}>.my_blog</h1>
				<GithubUrl/>
			</header>
		</BaseContextProvider>
		
	);
};
import { BaseContext } from '@/app/shared/context';
import { useContext } from 'react';
import GithubIcon from './icon/icon_github.svg';

export const GithubUrl = () => {
	const baseContext = useContext(BaseContext);
	
	return (
		<a title="Ссылка на гит" href={baseContext.GITHUB_URL}>
			<GithubIcon width={30} height={30} />
		</a>
	);
};
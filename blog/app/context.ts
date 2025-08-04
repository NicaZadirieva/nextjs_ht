import { createContext } from 'react';

export type BASE_CONTEXT_TYPE = {
    GITHUB_URL: string;
};
const BASE_INITIAL_CONTEXT: BASE_CONTEXT_TYPE  = {
	'GITHUB_URL': 'https://github.com/NicaZadirieva'
};

export const BaseContext = createContext(BASE_INITIAL_CONTEXT);
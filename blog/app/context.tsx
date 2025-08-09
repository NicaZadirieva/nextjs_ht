import { createContext, PropsWithChildren } from 'react';

export type BASE_CONTEXT_TYPE = {
    GITHUB_URL: string;
};
export const BASE_INITIAL_CONTEXT: BASE_CONTEXT_TYPE  = {
	'GITHUB_URL': 'https://github.com/NicaZadirieva'
};

export const BaseContext = createContext(BASE_INITIAL_CONTEXT);

export const BaseContextProvider = ({children} : PropsWithChildren) => (
	<BaseContext.Provider value={BASE_INITIAL_CONTEXT}>{children}</BaseContext.Provider>
);
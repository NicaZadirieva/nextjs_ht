import localFont from 'next/font/local';

export const localFontImport = localFont({
	src: [
		{
			path: '../font/SFProText-Regular.ttf',
			weight: '400',
			style: 'normal'
		},
		{
			path: '../font/SFProText-Medium.ttf',
			weight: '500',
			style: 'normal'
		},
		{
			path: '../font/SFProText-Bold.ttf',
			weight: '700',
			style: 'normal'
		}]
});
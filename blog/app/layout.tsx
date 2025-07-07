import localFont from 'next/font/local';
import './globals.css';

const SFText = localFont({
	src: [
		{
			path: './font/SFProText-Regular.ttf',
			weight: '400',
			style: 'normal'
		},
		{
			path: './font/SFProText-Medium.ttf',
			weight: '500',
			style: 'normal'
		},
		{
			path: './font/SFProText-Bold.ttf',
			weight: '700',
			style: 'normal'
		}]
});

export default function RootLayout({
	children
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={SFText.className}>
			<body>
				{children}
			</body>
		</html>
	);
}

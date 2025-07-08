import './globals.css';
import { localFontImport } from './shared/importFont';

export default function RootLayout({
	children
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={localFontImport.className}>
			<body>
				{children}
			</body>
		</html>
	);
}

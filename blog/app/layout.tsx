import './globals.css';
import { Header, localFontImport } from './shared';

export default function RootLayout({
	children
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={localFontImport.className}>
			<body className="container">
				<Header/>
				{children}
			</body>
		</html>
	);
}

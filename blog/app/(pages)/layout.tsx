import { Header, localFontImport } from '../shared';
import './globals.css';

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

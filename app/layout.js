import { Inter } from 'next/font/google';
import './globals.css';
import MainHeader from '@/components/main-header/main-header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Next Food Up',
    description: 'Community of Foodies, sharing their favorites',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <MainHeader />
                {children}
            </body>
        </html>
    );
}

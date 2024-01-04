import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'react-vertical-timeline-component/style.min.css';

import StarsCanvas from '@/components/canvas/StarBackground';
import { Navbar } from '@/components';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Anton Shvets Portfolio',
    description: 'Test description',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                suppressHydrationWarning={true}
                className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
            >
                <StarsCanvas />
                <Navbar />
                {children}
            </body>
        </html>
    );
}

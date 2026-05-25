import React from 'react';
import {Metadata} from "next";
import {Suspense} from "react";
import {Header} from "@/components/header/Header";
import {Footer} from "@/components/footer/Footer";
import "./globals.css";

export const metadata: Metadata = {
    title: 'MOVA — Discover Movies',
    description: 'Discover and explore movies from around the world.',
}

type Props = { children: React.ReactNode }

const RootLayout = ({children}: Props) => {
    return (
        <html lang="en">
            <body>
                <Suspense>
                    <Header/>
                </Suspense>
                <main>{children}</main>
                <Footer/>
            </body>
        </html>
    );
}

export default RootLayout;

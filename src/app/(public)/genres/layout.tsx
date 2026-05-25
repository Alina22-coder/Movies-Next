import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Genres — MOVA',
    description: 'Browse movies by genre.',
}

type Props = { children: React.ReactNode }

const GenresLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default GenresLayout;

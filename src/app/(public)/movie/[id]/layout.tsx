import React from 'react';

type Props = { children: React.ReactNode }

const MovieLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default MovieLayout;

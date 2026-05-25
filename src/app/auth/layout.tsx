import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Login — MOVA',
    description: 'Sign in to your account.',
}

type Props = { children: React.ReactNode }

const AuthLayout = ({children}: Props) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AuthLayout;

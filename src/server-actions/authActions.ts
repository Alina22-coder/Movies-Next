'use server';

import {cookies} from "next/headers";
import {redirect} from "next/navigation";

const HARDCODED_LOGIN = 'admin';
const HARDCODED_PASSWORD = '1234';

export const login = async (formData: FormData) => {
    const login = formData.get('login') as string;
    const password = formData.get('password') as string;

    if (login === HARDCODED_LOGIN && password === HARDCODED_PASSWORD) {
        const cookieStore = await cookies();
        cookieStore.set('user', JSON.stringify({name: login}), {
            httpOnly: true,
            path: '/',
        });
        redirect('/');
    }

    redirect('/auth?error=1');
}

export const logout = async () => {
    const cookieStore = await cookies();
    cookieStore.delete('user');
    redirect('/auth');
}

import React from 'react';
import Link from "next/link";
import {Suspense} from "react";
import {cookies} from "next/headers";
import {Menu} from "@/components/menu/Menu";
import {SearchInput} from "./SearchInput";
import {UserInfo} from "@/components/user-info/UserInfo";
import styles from "./Header.module.css";

const Header = async () => {
    const cookieStore = await cookies();
    const isLoggedIn = cookieStore.has('user');

    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logoLink}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 200 48"
                    width="140"
                    height="35"
                    className={styles.logo}
                >
                    <defs>
                        <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00D4FF"/>
                            <stop offset="100%" stopColor="#7B2FFF"/>
                        </linearGradient>
                    </defs>
                    <polygon points="18,4 8,26 16,26 10,44 26,18 17,18 26,4" fill="url(#g1)"/>
                    <text x="38" y="34" fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontSize="30" fontWeight="900" letterSpacing="3" fill="url(#g1)">MO</text>
                    <text x="96" y="34" fontFamily="'Inter','Helvetica Neue',Arial,sans-serif" fontSize="30" fontWeight="300" letterSpacing="3" fill="#ffffff">VA</text>
                </svg>
            </Link>

            {isLoggedIn && (
                <>
                    <nav className={styles.nav}>
                        <Menu/>
                    </nav>

                    <Suspense>
                        <SearchInput/>
                    </Suspense>

                    <div className={styles.userInfo}>
                        <UserInfo/>
                    </div>
                </>
            )}
        </header>
    );
};

export {Header};

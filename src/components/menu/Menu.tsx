'use client';

import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from "./Menu.module.css";

const Menu = () => {
    const pathname = usePathname();

    return (
        <ul className={styles.list}>
            <li>
                <Link href="/movies" className={pathname.startsWith('/movies') ? styles.active : ''}>
                    Movies
                </Link>
            </li>
        </ul>
    );
};

export {Menu};

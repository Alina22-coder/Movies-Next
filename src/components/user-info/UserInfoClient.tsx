'use client';

import React, {useState, useRef, useEffect} from 'react';
import Form from "next/form";
import {logout} from "@/server-actions/authActions";
import styles from "./UserInfo.module.css";

type Props = {
    name: string;
}

const UserInfoClient = ({name}: Props) => {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

    return (
        <div className={styles.container} ref={ref}>
            <button className={styles.avatarBtn} onClick={() => setOpen(v => !v)}>
                <div className={styles.avatar}>{name[0].toUpperCase()}</div>
                <span className={styles.name}>{name}</span>
            </button>

            {open && (
                <div className={styles.dropdown}>
                    <span className={styles.dropdownNameMobile}>{name}</span>
                    <Form action={logout}>
                        <button type="submit" className={styles.dropdownLogout}>Logout</button>
                    </Form>
                </div>
            )}
        </div>
    );
}

export {UserInfoClient};

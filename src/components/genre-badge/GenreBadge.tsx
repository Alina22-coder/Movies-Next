import React from 'react';
import Link from "next/link";
import styles from "./GenreBadge.module.css";

type GenreBadgeProps = {
    id: number;
    name: string;
}

const GenreBadge = ({id, name}: GenreBadgeProps) => {
    return (
        <Link href={`/genre/${id}`} className={styles.badge}>
            {name}
        </Link>
    );
};

export {GenreBadge};

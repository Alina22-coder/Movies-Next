"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "@/app/(public)/movies/MoviesPage.module.css";

type Props = {
  page: number;
  totalPages: number;
};

export const Pagination = ({ page, totalPages }: Props) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const goTo = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", String(newPage));
    router.push(`/movies?${params.toString()}`);
  };

  return (
    <div className={styles.buttons}>
      <button className={styles.btn} onClick={() => goTo(page - 1)} disabled={page === 1}>
        Prev
      </button>
      <span className={styles.page}>{page} / {totalPages}</span>
      <button className={styles.btn} onClick={() => goTo(page + 1)} disabled={page >= totalPages}>
        Next
      </button>
    </div>
  );
};

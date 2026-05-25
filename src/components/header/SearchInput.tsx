"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import styles from "./Header.module.css";

export const SearchInput = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [value, setValue] = useState(searchParams.get("q") ?? "");
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setValue(searchParams.get("q") ?? "");
  }, [searchParams]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      if (pathname !== "/movies") {
        router.push(`/movies?q=${encodeURIComponent(newValue)}`);
      } else {
        const params = new URLSearchParams(searchParams.toString());
        if (newValue) params.set("q", newValue);
        else params.delete("q");
        router.replace(`/movies?${params.toString()}`);
      }
    }, 400);
  };

  return (
    <input
      type="text"
      value={value}
      onChange={handleSearch}
      placeholder="Search movies..."
      className={styles.search}
    />
  );
};

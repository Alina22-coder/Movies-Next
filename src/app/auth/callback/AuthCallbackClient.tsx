"use client";

import { useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export const AuthCallbackClient = () => {
  const searchParams = useSearchParams();
  const { handleCallback } = useAuth();
  const router = useRouter();
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    const token = searchParams.get("request_token");
    if (!token) {
      router.replace("/");
      return;
    }
    handleCallback(token).finally(() => router.replace("/"));
  }, []);

  return <p style={{ padding: "2rem" }}>Signing in...</p>;
};

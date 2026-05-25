import { Suspense } from "react";
import { AuthCallbackClient } from "./AuthCallbackClient";

export default function AuthCallbackPage() {
  return (
    <Suspense fallback={<p style={{ padding: "2rem" }}>Signing in...</p>}>
      <AuthCallbackClient />
    </Suspense>
  );
}

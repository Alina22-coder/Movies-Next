import { Suspense } from "react";
import { MoviesPageClient } from "./MoviesPageClient";

export default function MoviesPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <MoviesPageClient />
    </Suspense>
  );
}

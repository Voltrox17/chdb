import { cacheLife } from "next/cache";

/** Cached so the footer stays static under Cache Components; refreshes daily. */
export async function CopyrightYear() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}

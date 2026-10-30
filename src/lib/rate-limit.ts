/**
 * Minimal fixed-window rate limiter held in process memory.
 * Adequate for a single long-lived server; on serverless or multi-instance
 * hosting, replace with a shared store (e.g. Upstash Redis / Vercel KV).
 */
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;
const hits = new Map<string, { count: number; resetAt: number }>();

export function checkRateLimit(key: string, now = Date.now()): boolean {
  const entry = hits.get(key);
  if (!entry || entry.resetAt <= now) {
    hits.set(key, { count: 1, resetAt: now + WINDOW_MS });
    if (hits.size > 5000) {
      for (const [k, v] of hits) if (v.resetAt <= now) hits.delete(k);
    }
    return true;
  }
  entry.count += 1;
  return entry.count <= MAX_REQUESTS;
}

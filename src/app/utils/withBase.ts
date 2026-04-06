const ABSOLUTE_URL_RE = /^(?:[a-z]+:)?\/\//i;

export function withBase(path: string): string {
  if (ABSOLUTE_URL_RE.test(path) || path.startsWith("data:") || path.startsWith("blob:")) {
    return path;
  }

  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${import.meta.env.BASE_URL}${normalized}`;
}

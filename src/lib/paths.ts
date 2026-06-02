export const BASE_PATH = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

export function withBase(path = "") {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${BASE_PATH}${cleanPath}`;
}

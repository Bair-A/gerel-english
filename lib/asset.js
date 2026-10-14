// Путь к файлу из public/ с учётом адреса сайта на GitHub Pages (/gerel-english).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function asset(path) {
  return `${basePath}${path}`;
}

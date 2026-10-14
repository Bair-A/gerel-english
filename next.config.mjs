// Сайт собирается в статические HTML-файлы (папка out/) и выкладывается на GitHub Pages.
// На GitHub Pages сайт живёт по адресу /gerel-english, поэтому сборка в GitHub Actions
// передаёт этот путь через NEXT_PUBLIC_BASE_PATH. Локально (npm run dev) путь пустой.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;

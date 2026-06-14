/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Sirve fotos modernas; next/image hace el fallback automático.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;

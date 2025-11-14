/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静的エクスポート
  images: {
    unoptimized: true, // 画像最適化を無効化
  },
};

module.exports = nextConfig;

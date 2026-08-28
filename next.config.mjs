/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/consent/review",
        destination: "https://kcccciovturihhiorboz.supabase.co/functions/v1/parent-consent",
      },
    ];
  },
};

export default nextConfig;

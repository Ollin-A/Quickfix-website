/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            },
            {
                protocol: "https",
                hostname: "utfs.io",
            },
            {
                protocol: "https",
                hostname: "lh3.googleusercontent.com", // Google User Avatars
            },

            // ✅ Yelp images (use wildcard correctly)
            {
                protocol: "https",
                hostname: "*.yelpcdn.com",
            },

            // ✅ Imgur
            {
                protocol: "https",
                hostname: "i.imgur.com",
            },
            {
                protocol: "https",
                hostname: "imgur.com",
            },
        ],
    },
};

export default nextConfig;

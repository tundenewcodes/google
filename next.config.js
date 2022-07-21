/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['links.papareact.com', 'image.tmdb.org', 'www.citypng.com',
            'platform-lookaside.fbsbx.com', 'images.unsplash.com',
            'firebasestorage.googleapis.com'
        ]
    }
}

module.exports = nextConfig
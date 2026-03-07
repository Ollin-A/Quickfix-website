import { unstable_cache } from 'next/cache';

export interface UnifiedReview {
    id: string;
    source: 'google' | 'yelp';
    author: string;
    rating: number;
    text: string;
    date: string;
    avatarUrl?: string;
    verificationUrl: string;
}

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID;
const YELP_API_KEY = process.env.YELP_API_KEY;
const YELP_BUSINESS_ID = process.env.YELP_BUSINESS_ID;

// Mock Data Fallback in case keys are missing (Dev Mode)
const MOCK_REVIEWS: UnifiedReview[] = [
    {
        id: "mock-1",
        source: "google",
        author: "Julia P.",
        rating: 5,
        text: "Alberto did an amazing job. Honestly I was expecting the price to be way higher because the work was super clean and professional, but it ended up being way more affordable than I thought. I even felt like I was paying less than what the job was worth. Totally recommend him.",
        date: "2025-12-17",
        verificationUrl: "#"
    },
    {
        id: "mock-2",
        source: "yelp",
        author: "Jasmin T.",
        rating: 5,
        text: "Fast, reliable and friendly service. He is a very dependable person that will tell you and quote you on what you really need and does not try to push you to get things you don't need. 100% recommended.",
        date: "2020-02-17",
        verificationUrl: "#"
    },
    {
        id: "mock-3",
        source: "google",
        author: "Sebastian S.",
        rating: 5,
        text: "Alberto helped me out with a gutter repair and some small roof fixes, and the difference was noticeable right away. Super clean job and done way faster than I expected. The price was surprisingly affordable for the quality of the work. Really glad I found someone this reliable.",
        date: "2025-12-17",
        verificationUrl: "#"
    },
    {
        id: "mock-4",
        source: "yelp",
        author: "Robin Z.",
        rating: 5,
        text: "I started a laminate floor project. I had done these before, but I was 20 years younger. I found I was not up to it. They were able to take over and finish the job—actually they just started over. Their skills made the project better than I could have done.",
        date: "2024-02-17",
        verificationUrl: "#"
    },
    {
        id: "mock-5",
        source: "google",
        author: "Deanna J.",
        rating: 5,
        text: "Alberto helped me with a small job for a reasonable price. He was professional, friendly and did great quality work in a fast amount of time. I am grateful for his service and feel confident knowing that his business is licensed, bonded and insured too! I look forward to enlisting him for more business in the future and highly recommend his services.",
        date: "2025-02-17",
        verificationUrl: "#"
    },
    {
        id: "mock-6",
        source: "yelp",
        author: "Jane W.",
        rating: 5,
        text: "Alberto is highly skilled and easy to work with. He sticks to a problem until it is resolved. If it's an easy fix, he is in and out in no time. If you want new and shiny, great. If you need a job done on the cheap, he will reuse existing materials, as long as they are sound. We've had his team replace interior drywall, fix ventilation piping, replace a toilet, repair fence gates, and sink new fence posts.",
        date: "2024-02-17",
        verificationUrl: "#"
    },
    {
        id: "mock-7",
        source: "google",
        author: "Missael M.",
        rating: 5,
        text: "Alberto fixed a couple things around my place, including a door and some drywall, and the results were way better than I expected. Super clean work and done fast. The price was surprisingly affordable too considering the quality. Definitely someone you want to call when you need things done right.",
        date: "2025-02-17",
        verificationUrl: "#"
    }
];

interface GoogleReview {
    time: number;
    author_name: string;
    rating: number;
    text: string;
    profile_photo_url: string;
    author_url: string;
}

interface YelpReview {
    id: string;
    user: {
        name: string;
        image_url: string;
    };
    rating: number;
    text: string;
    time_created: string;
    url: string;
}

async function fetchGoogleReviews(): Promise<UnifiedReview[]> {
    if (!GOOGLE_API_KEY || !GOOGLE_PLACE_ID) return [];

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/details/json?place_id=${GOOGLE_PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`
        );
        if (!response.ok) {
            throw new Error(`Google API error: ${response.status} ${response.statusText}`);
        }
        const text = await response.text();
        if (!text) return [];
        const data = JSON.parse(text);

        if (!data.result || !data.result.reviews) return [];

        return data.result.reviews.map((review: GoogleReview) => ({
            id: review.time ? String(review.time) : Math.random().toString(),
            source: 'google',
            author: review.author_name,
            rating: review.rating,
            text: review.text,
            date: new Date(review.time * 1000).toISOString(),
            avatarUrl: review.profile_photo_url,
            verificationUrl: review.author_url || '#'
        }));
    } catch (error) {
        console.warn("Error fetching Google reviews:", error);
        return [];
    }
}

async function fetchYelpReviews(): Promise<UnifiedReview[]> {
    if (!YELP_API_KEY || !YELP_BUSINESS_ID) return [];

    try {
        const response = await fetch(
            `https://api.yelp.com/v3/businesses/${YELP_BUSINESS_ID}/reviews`,
            {
                headers: {
                    Authorization: `Bearer ${YELP_API_KEY}`,
                    accept: 'application/json',
                }
            }
        );
        if (!response.ok) {
            console.warn(`Yelp API error: ${response.status} ${response.statusText}`);
            return [];
        }
        const text = await response.text();
        if (!text) return [];
        const data = JSON.parse(text);

        if (!data.reviews) return [];

        return data.reviews.map((review: YelpReview) => ({
            id: review.id,
            source: 'yelp',
            author: review.user.name,
            rating: review.rating,
            text: review.text,
            date: review.time_created,
            avatarUrl: review.user.image_url,
            verificationUrl: review.url
        }));
    } catch (error) {
        console.warn("Error fetching Yelp reviews:", error);
        return [];
    }
}

const CACHE_VERSION = 'v1'; // Bump this to invalidate cache in production

// Separate the core logic for easy testing & bypass
export async function computeReviews(): Promise<UnifiedReview[]> {
    // 0. Force Mock Mode (Optional Env)
    if (process.env.FORCE_MOCK_REVIEWS) {
        return MOCK_REVIEWS;
    }

    // 1. If keys missing, fallback to mocks
    if (!process.env.GOOGLE_API_KEY && !process.env.YELP_API_KEY) {
        console.warn("Review API Keys missing. Using mock data.");
        return MOCK_REVIEWS;
    }

    // 2. Fetch Real Data
    const [googleReviews, yelpReviews] = await Promise.all([
        fetchGoogleReviews(),
        fetchYelpReviews()
    ]);

    const allReviews = [...googleReviews, ...yelpReviews]
        .filter(r => r.rating === 5) // STRICT FILTER: 5 Stars only
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Newest first

    // 3. Fallback if API returns empty
    return allReviews.length > 0 ? allReviews : MOCK_REVIEWS;
}

// Production Cache Wrapper
const getCachedReviews = unstable_cache(
    async () => computeReviews(),
    [`reviews-cache-${CACHE_VERSION}`],
    { revalidate: 3600 } // 1 Hour
);

// Main Export: Decides whether to use Cache or Live
export async function getReviews(): Promise<UnifiedReview[]> {
    // In Development OR if we forced mocks, bypass cache completely
    // This allows instant updates to MOCK_REVIEWS without restarting
    if (process.env.NODE_ENV !== 'production' || process.env.FORCE_MOCK_REVIEWS) {
        return computeReviews();
    }

    // In Production, use the Next.js Cache
    return getCachedReviews();
}

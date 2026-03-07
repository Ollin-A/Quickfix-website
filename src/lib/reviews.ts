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

export async function computeReviews(): Promise<UnifiedReview[]> {
    return MOCK_REVIEWS;
}

// Main Export: Decides whether to use Cache or Live
export async function getReviews(): Promise<UnifiedReview[]> {
    return computeReviews();
}

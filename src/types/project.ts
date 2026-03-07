export interface Project {
    id: number;
    title: string;
    category: string;
    location: string;
    completionDate: string;
    images: {
        before?: string;
        after: string;
    };
    caseStudy?: {
        challenge: string;
        solution: string;
    };
}

export interface Movie {
    id: string;
    title: string;
    year: string;
    rating: number;
    poster: string;
    synopsis?: string;
    cast?: string[];
    genre: string[];
}

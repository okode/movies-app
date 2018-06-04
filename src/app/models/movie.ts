export interface Movie {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_count: number;
  vote_average: number;
  poster_path: string;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  popularity: number;
  adult: boolean;
  video: boolean;
  // detail
  runtime?: number;
  budget?: number;
  production_companies?: {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }[];
  genres?: {
    id: number;
    name: string;
  }[];
  credits?: {
    cast?: {
      name?: string,
      profile_path?: string,
      character?: string
    }[];
  };
}

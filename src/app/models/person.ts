export interface Person {
  id: number;
  name: string;
  birthday: string;
  deathday: string;
  biography: string;
  popularity: number;
  place_of_birth: string;
  profile_path: string;
  adult: boolean;
  imdb_id: string;
  homepage: string;
  also_known_as: string[];
  credits: {
    cast: {
      id: number;
      title: string;
      character: string;
      original_title: string;
      release_date: string;
      adult: boolean;
      poster_path: string;
      credit_id: string;
    }[]
  };
}

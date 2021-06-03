export interface HeroesTypeI {
    id: string;
    name: string;
}
export interface HeroseI {
    avatar_url: string;
    description: string;
    full_name: string;
    id: string;
    type: HeroesTypeI;
}
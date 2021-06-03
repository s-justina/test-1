export interface IHeroType {
    id: string;
    name: string;
}
export interface IHero {
    avatar_url: string;
    description: string;
    full_name: string;
    id: string;
    type: IHeroType;
}
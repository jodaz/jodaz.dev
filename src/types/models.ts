export interface IPosition {
    title: string;
    years: string;
}

export interface IWorkExperience {
    business_name: string;
    positions: IPosition[];
}

export interface IProject {
    name: string;
    description: string;
    picture: string;
    href?: string;
    github?: string;
    hidden: boolean;
    skills?: string[];
}

export interface IPost {
    node: Node;
}

export interface Node {
    id:                string;
    title:             string;
    publishedAt:       string;
    url:               string;
    brief:             string;
    readTimeInMinutes: number;
    coverImage:        CoverImage;
}

export interface CoverImage {
    url: string;
}


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
}

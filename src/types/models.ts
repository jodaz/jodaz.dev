export interface IPosition {
    title: string;
    years: string;
}

export interface IWorkExperience {
    business_name: string;
    positions: IPosition[];
}

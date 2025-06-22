export interface Organization {
    id: string;
    numbers: [number, number];
    name: string;
    colors: string[];
    logo: string;
}

export type GetBankData = (
    value: number,
) => Organization | undefined;
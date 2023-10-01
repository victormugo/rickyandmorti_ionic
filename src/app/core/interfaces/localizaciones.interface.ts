export interface ILocalizaciones {
    info: IInfoL,
    results: IResultsL[],
}

export interface IInfoL {
    count: number,
    pages: number,
    next: string,
    prev: string
}

export interface IResultsL {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: string[],
    url: string,
    created: string
}
export interface ILocalizaciones {
    info: IInfo,
    results: IResults[],
}

export interface IInfo {
    count: number,
    pages: number,
    next: string,
    prev: string
}

export interface IResults {
    id: number,
    name: string,
    type: string,
    dimension: string,
    residents: string[],
    url: string,
    created: string
}
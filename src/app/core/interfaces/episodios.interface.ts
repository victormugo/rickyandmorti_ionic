export interface IEpisodio {
    info: IInfoE,
    results: IResultsE[],
}

export interface IInfoE {
    count: number,
    pages: number,
    next: string,
    prev: string
}

export interface IResultsE {
    id: number,
    name: string,
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}
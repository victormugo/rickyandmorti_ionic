export interface IEpisodio {
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
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}
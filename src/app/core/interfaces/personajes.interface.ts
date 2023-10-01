export interface IPersonaje {
    info: IInfoP,
    results: IResultsP[],
}

export interface IInfoP {
    count: number,
    pages: number,
    next: string,
    prev: string
}

export interface IResultsP{
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: IOriginP,
    location: ILocationP,
    image: string,
    episode: string[],
    url: string,
    created: string
}

export interface IOriginP {
    name: string,
    url: string
}

export interface ILocationP {
    name: string,
    url: string
}
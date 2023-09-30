export interface IResponseCollection {
    data: ICollection;
}

export interface ICollection {
    items: any;
    total: number;
}

export interface IResponseModel {
    data: {
        [key: string]: any;
    };
}
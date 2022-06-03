import {HttpClient} from "./api/http-client";

export interface IItemsService {
    getInfoItems(): Promise<any>
}

export class ItemsService implements IItemsService{

    constructor(private readonly httpClient: HttpClient){
    }

    getInfoItems(): Promise<any> {
        return this.httpClient.get<any>('/items').then((r:any) =>{

            return r;
        } )
    }
}
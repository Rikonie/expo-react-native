
import {HttpClient} from "./api/http-client";

export interface IItemGroupsService {
    getInfoItemGroups(): Promise<any>
}

export class ItemGroupsService implements IItemGroupsService{

    constructor(private readonly httpClient: HttpClient){
    }

    getInfoItemGroups(): Promise<any> {
        return this.httpClient.get<any>('/groups').then((r:any) =>{
            return r;
        } )
    }
}
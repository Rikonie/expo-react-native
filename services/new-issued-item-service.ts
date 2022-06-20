import {HttpClient} from "./api/http-client";
import {IssuedItem} from "../types/issued-item";

export interface INewItemService {
    issuedItem(issuedItem: IssuedItem): Promise<any>
}

export class NewItemService implements INewItemService{

    constructor(private readonly httpClient: HttpClient){
    }

    async issuedItem (issuedItem: IssuedItem): Promise<string> {
        return await this.httpClient.post<any>('/issueditem', issuedItem).then((r:any) =>{
            return r;
        } )
    }
}
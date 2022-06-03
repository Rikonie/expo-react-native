import {HttpClient} from "./api/http-client";

export interface IFilterService {
    getInfo(a:number): Promise<any>
}

export class FilterService implements IFilterService{

    constructor(private readonly httpClient: HttpClient){
    }

    getInfo(a:number): Promise<any> {
        return this.httpClient.get<any>('filter/'+a+'/1/10000').then((r:any) =>{
            return r;
        } )
    }
}
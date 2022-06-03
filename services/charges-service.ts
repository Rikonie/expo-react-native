
import {HttpClient} from "./api/http-client";

export interface IChargesService {
    getInfoCharges(): Promise<any>
}

export class ChargesService implements IChargesService{

    constructor(private readonly httpClient: HttpClient){
    }

    getInfoCharges(): Promise<any> {
        return this.httpClient.get<any>('/items').then((r:any) =>{
            return r;
        } )
    }
}
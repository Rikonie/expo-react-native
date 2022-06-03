import {HttpClient} from "./api/http-client";

export interface IGetGuestService {
    getInfoGuest(room: string): Promise<any>
}

export class GetGuestService implements IGetGuestService{

    constructor(private readonly httpClient: HttpClient){
    }

    getInfoGuest(room: string): Promise<any> {
        return this.httpClient.post<any>('/gueststayinfo', {id_room: room}).then((r:any) =>{
            return r;
        } )
    }
}
import {HttpClient} from "./api/http-client";

export interface IRoomNumbersService {
    getInfoRoomNumber(): Promise<any>
}

export class RoomNumbersService implements IRoomNumbersService{

    constructor(private readonly httpClient: HttpClient){
    }

    getInfoRoomNumber(): Promise<any> {
        return this.httpClient.get<any>('/rooms').then((r:any) =>{
            return r;
        } )
    }
}
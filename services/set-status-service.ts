import {HttpClient} from "./api/http-client";
import {SetStatus} from "../classes/set-status";


export interface ISetStatusService {
    setStatus(setStatus: SetStatus): Promise<any>
}

export class SetStatusService implements ISetStatusService{

    constructor(private readonly httpClient: HttpClient){
    }

    async setStatus (setStatus: SetStatus): Promise<string> {
        return await this.httpClient.post<any>('/setstatus', setStatus).then((r:any) =>{
            return r;
        } )
    }
}
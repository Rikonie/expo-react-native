import {HttpClient} from "./api/http-client";
import {User} from "../types/user";

export interface IAuthService {
    token(user: User): Promise<any>
}

export class AuthService implements IAuthService{

    constructor(private readonly httpClient: HttpClient){
    }

    async token (user: User): Promise<string> {
        return await this.httpClient.post<any>('/auth', user).then((r:any) =>{
            return r.token;
        } )
    }
}
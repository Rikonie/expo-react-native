import axios, {AxiosInstance, AxiosResponse} from 'axios';


export class HttpClient {

    protected readonly instance: AxiosInstance;

    public constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
        });

        this._initializeResponseInterceptor();
    }

    private _initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(
            this._handleResponse,
            this._handleError,
        );
        this.instance.interceptors.request.use(config => {
            return config;
        });
    };

    protected _handleError = (error: any) => Promise.reject(error);

    private _handleResponse = ({data}: AxiosResponse) => data;

    public get<ResponseType>(url: string, params?: any) {
        return this.instance.get<ResponseType>(url);
    }

    public post<ResponseType>(url: string, params: any) {
        return this.instance.post<ResponseType>(url, params);
    }

    public setAuthHeaders(token: string|null): void {
        this.instance.interceptors.request.use(config => {
            if (config.headers) {
                config.headers['Auth'] = "Token " + token;
            }
            return config;
        });
    };
}

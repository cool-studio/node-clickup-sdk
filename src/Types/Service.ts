import { AxiosInstance } from "axios";

export class Service {
    protected Axios: AxiosInstance;

    constructor (axios: AxiosInstance) {
        this.Axios = axios;
    }
}

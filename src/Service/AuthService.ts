import { AxiosResponse } from "axios";
import { Service } from "../Types/Service";
import { AuthorizedUserResponse, User } from "../Types/Authorization";

export class AuthService extends Service {
    public GetAuthorizedUser(): Promise<AxiosResponse<AuthorizedUserResponse>> {
        return this.Axios.get<AuthorizedUserResponse>(`/user`);
    }
}

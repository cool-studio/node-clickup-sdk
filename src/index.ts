import Axios, { AxiosInstance } from "axios";
import { TaskService } from "./Service/TaskService";
import { AuthService } from "./Service/AuthService";
import { CommentService } from "./Service/CommentService";

class ClickUp {
    private axios: AxiosInstance;
    private token: string;

    public tasks: TaskService;
    public auth: AuthService;
    public comments: CommentService;

    constructor (PersonalAccessToken: string)
    {
        this.token = PersonalAccessToken;

        this.axios = Axios.create({
            baseURL: "https://api.clickup.com/api/v2/",
            headers: {
                Authorization: this.token
            }
        });

        this.tasks = new TaskService(this.axios);
        this.auth = new AuthService(this.axios);
        this.comments = new CommentService(this.axios);
    }
}

export default ClickUp;

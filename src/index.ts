import Axios, { AxiosInstance } from "axios";
import { TaskService } from "./Service/TaskService";

class ClickUp {
    private axios: AxiosInstance;
    private token: string;

    public tasks: TaskService;

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
    }
}

export default ClickUp;

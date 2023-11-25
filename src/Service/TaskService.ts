import { AxiosResponse } from "axios";
import { Service } from "../Types/Service";
import { CreateTaskRequest, CreateTaskResponse } from "../Types/Task";

export class TaskService extends Service {
    public CreateTask(list: string, request: CreateTaskRequest): Promise<AxiosResponse<CreateTaskResponse>> {
        return this.Axios.post<CreateTaskResponse>(`/list/${list}/task`, request);
    }
}

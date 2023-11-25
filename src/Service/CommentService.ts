import { AxiosResponse } from "axios";
import { Service } from "../Types/Service";
import { CreateTaskRequest, CreateTaskResponse } from "../Types/Task";
import { TaskAddCommentRequest, TaskAddCommentResponse } from "../Types/Comment";

export class CommentService extends Service {
    public CreateComment(task: string, request: TaskAddCommentRequest): Promise<AxiosResponse<TaskAddCommentResponse>> {
        return this.Axios.post<TaskAddCommentResponse>(`/task/${task}/comment`, request);
    }
}

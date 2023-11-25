import ClickUp from "../src";
import { config } from "dotenv";

config();

if (typeof process.env.ClickUpPAT !== "string") {
    process.exit();
}

const clickup = new ClickUp(process.env.ClickUpPAT);

console.log(process.env.ClickUpPAT);

(async () => {
    const TaskResponse = await clickup.tasks.CreateTask("900501571775", {
        name: "This is a test"
    });

    const UserResponse = await clickup.auth.GetAuthorizedUser();
    
    if (TaskResponse.data.id) {
        const CommentResponse = await clickup.comments.CreateComment(TaskResponse.data.id, {
            comment_text: "This is a test comment",
            assignee: null,
            notify_all: false
        });
    }
})();

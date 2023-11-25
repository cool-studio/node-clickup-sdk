import ClickUp from "../src";
import DotEnv from "dotenv";

DotEnv.config();

if (typeof process.env.ClickUpPAT !== "string") {
    process.exit();
}

const clickup = new ClickUp(process.env.ClickUpPAT);

(async () => {
    const response = await clickup.tasks.CreateTask("900501571775", {
        name: "This is a test"
    });

    console.log(response.data);
})();

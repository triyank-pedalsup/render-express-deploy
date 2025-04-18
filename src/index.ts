import express from "express";
import { UserRouter } from "../src/user/user.routes";
const userRouter = new UserRouter();

const app = express();
app.use(express.json());

app.use("/api",userRouter.config());

app.listen(3003,()=>{
    console.log("server is running on port 3003");
})

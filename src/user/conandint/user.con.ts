import { Router } from "express";
import { UserInterface } from "./user.int";
import { InjectCls } from "../decorator/inject-cls";
import { UserController } from "../user.controller";

export class UserCon implements UserInterface {

    public router : Router;

    @InjectCls(UserController)
    protected userController: UserController;

    constructor(){
        this.router = Router();
        this.inRoutes();
    }

    inRoutes(): void {
        this.router.get("/get",(req,res)=>this.userController.getAllData(req,res));
        this.router.post("/create",(req,res)=>this.userController.create(req,res));
        this.router.delete("/delete/:id",(req,res)=>this.userController.deleteUser(req,res));
        this.router.put("/update/:id",(req,res)=>this.userController.updateUser(req,res));
    }
}
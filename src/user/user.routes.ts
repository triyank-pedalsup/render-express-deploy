// import express from 'express'
// import { UserController } from './user.controller';
// let router = express.Router();
// const userController = new UserController();

import { Router } from "express";
import { UserCon } from "./conandint/user.con";
import { InjectCls } from "./decorator/inject-cls";
import { UserController } from "./user.controller";

// router.use("/get",(req,res)=>userController.getAllData(req,res));
// router.use("/create",(req,res)=>userController.create(req,res));
// router.use("/delete/:id",(req,res)=>userController.deleteUser(req,res));
// router.use("/update/:id",(req,res)=>userController.updateUser(req,res));

// export default router;


// import { Router } from "express";
// import { InjectCls } from "./decorator/inject-cls";
// import { UserController } from "./user.controller";

// export class UserRouter {

//     public router : Router;
    
//     @InjectCls(UserController)
//     private userController : UserController;

//     constructor() {
//         this.router = Router();
//         this.inRoutes();
//     }
    
//     inRoutes(): void {
//         this.router.post("/create",(req,res)=>this.userController.create(req,res));
//         this.router.get("/get",(req,res)=>this.userController.getAllData(req,res));
//         this.router.delete("/delete/:id",(req,res)=>this.userController.deleteUser(req,res));
//         this.router.put("/update/:id",(req,res)=>this.userController.updateUser(req,res));
//     }
// }


export class UserRouter extends UserCon{
    public config(){
        const router = Router();
        router.use("/user",new UserRouter().router);
        return router;
    }
}

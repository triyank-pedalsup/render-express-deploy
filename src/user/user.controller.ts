import { PrismaClient } from "../../prisma/generated/prisma/index.js";
const prisma = new PrismaClient();

export class UserController{

    //create
    public create = async (req,res) => {
        try {
            const  {name,email,password } = req.body;
            const newUser = await prisma.user.create({
                data:{
                    name,email,password
                }
            });
            res.status(201).json({ message: "create user successfully", data: newUser });
        } catch (error) {
            res.status(500).json({ message: "Error fetching users", error });
        }
    }

    //get
    public getAllData = async (req, res) => {
        try {
          const allUsers = await prisma.user.findMany();
          res.status(200).json({ message: "get users", data: allUsers });
        } catch (error) {
          res.status(500).json({ message: "Error fetching users", error });
        }
    };

    //delete
    public deleteUser = async (req,res) => {
        try {
            const id = Number(req.params.id);
            const user = await prisma.user.delete({
                where:{
                    id
                }
            });
            res.status(200).json({ message: "delete user successfully", data: user });
        } catch (error) {
            res.status(500).json({ message: "Error fetching users", error });
        }
    }

    //update
    public updateUser = async (req,res) => {
        try {
            const { name,email,password } = req.body;
            const id = Number(req.params.id);
            const user = await prisma.user.update({
                where:{
                    id
                },data:{
                    name,email,password
                }
            })
            res.status(200).json({ message: "update user successfully", data: user });
        } catch (error) {
            res.status(500).json({ message: "Error fetching users", error });
        }        
    }

}
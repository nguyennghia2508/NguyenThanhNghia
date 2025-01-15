import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UserController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    // Create a user
    async createUser(req: Request, res: Response): Promise<void> {
        try {
            await this.userService.createUser(req.body);
            res.status(201).json({ message: "User created successfully" });
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };

    // Get all users
    async getAllUsers(req: Request, res: Response): Promise<void> {
        try {
            const users = await this.userService.getAllUsers();
            res.status(200).json(users);
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };

    // Get a user by ID
    async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const user = await this.userService.getUserById(req.params.id);
            if (!user) {
                res.status(404).json({ error: "User not found" });
            }
            res.status(200).json(user);
        } catch (error: any) {
            res.status(404).json({ message: error.message });
        }
    };

    // Update a user
    async updateUser(req: Request, res: Response): Promise<void> {
        try {
            const updatedUser = await this.userService.updateUser(
                req.params.id,
                req.body,
            );
            if (!updatedUser) {
                res.status(404).json({ error: "User not found" });
            }
            res.status(201).json({
                message: "User updated successfully",
                updatedUser
            });
        } catch (error: any) {
            res.status(400).json({ message: error.message });
        }
    };

    // Delete a user
    async deleteUser(req: Request, res: Response): Promise<void> {
        try {
            const deletedUser = await this.userService.deleteUser(req.params.id);
            if (!deletedUser) {
                res.status(404).json({ error: "User not found" });
            }
            res.status(200).json({ message: "User deleted successfully" });
        } catch (error: any) {
            res.status(404).json({ message: error.message });
        }
    };
}
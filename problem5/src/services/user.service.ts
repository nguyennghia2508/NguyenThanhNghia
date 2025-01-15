import { UserModel } from "../models/user.model";
import { User } from "../models/user.model";
import { Types } from "mongoose";

export class UserService {
    // Create a user
    async createUser(userData: { name: string; email: string; age?: number }): Promise<User> {
        const newUser = new UserModel(userData);
        try {
            await newUser.save();
            return newUser;
        } catch (error: any) {
            throw new Error("Error creating user: " + error.message);
        }
    }

    // Get all users
    async getAllUsers(): Promise<User[]> {
        try {
            const users = await UserModel.find();
            return users;
        } catch (error: any) {
            throw new Error("Error fetching users: " + error.message);
        }
    }

    // Get user by ID
    async getUserById(userId: string): Promise<User | null> {
        if (!Types.ObjectId.isValid(userId)) {
            throw new Error("Invalid ID format");
        }

        try {
            const user = await UserModel.findById(userId);
            return user;
        } catch (error: any) {
            throw new Error("Error fetching user by ID: " + error.message);
        }
    }

    // Update user by ID
    async updateUser(userId: string, userData: { name?: string; email?: string; age?: number }): Promise<User | null> {
        if (!Types.ObjectId.isValid(userId)) {
            throw new Error("Invalid ID format");
        }

        try {
            const updatedUser = await UserModel.findByIdAndUpdate(userId, userData, { new: true });
            return updatedUser;
        } catch (error: any) {
            throw new Error("Error updating user: " + error.message);
        }
    }

    // Delete user by ID
    async deleteUser(userId: string): Promise<User | null> {
        if (!Types.ObjectId.isValid(userId)) {
            throw new Error("Invalid ID format");
        }

        try {
            const deletedUser = await UserModel.findByIdAndDelete(userId);
            return deletedUser;
        } catch (error: any) {
            throw new Error("Error deleting user: " + error.message);
        }
    }
}

import mongoose, { Schema, Document } from "mongoose";

export interface User extends Document {
    name: string;
    email: string;
    age?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

const UserSchema = new Schema<User>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        age: { type: Number },
    },
    { timestamps: true }
);

export const UserModel = mongoose.model<User>("User", UserSchema);
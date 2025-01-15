import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import mongoose from "mongoose";

// User schema for validation
const userSchema = Joi.object({
    name: Joi.string().min(3).required().messages({
        "string.base": `"name" should be a type of 'text'`,
        "string.empty": `"name" cannot be an empty field`,
        "string.min": `"name" should have a minimum length of 3`,
        "any.required": `"name" is a required field`,
    }),
    email: Joi.string().email().required().messages({
        "string.base": `"email" should be a type of 'text'`,
        "string.empty": `"email" cannot be an empty field`,
        "string.email": `"email" must be a valid email`,
        "any.required": `"email" is a required field`,
    }),
    age: Joi.number().optional().min(0).messages({
        "number.base": `"age" should be a type of 'number'`,
        "number.min": `"age" should be greater than or equal to 0`,
    }),
});

// Update user schema with optional fields
const updateUserSchema = userSchema.fork(["name", "email", "age"], (field) =>
    field.optional()
);

// Validate create user
export const validateCreateUser = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const { error } = userSchema.validate(req.body);
    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return; // Ensure no further execution
    }
    next();
};

// Validate update user
export const validateUpdateUser = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const { error } = updateUserSchema.validate(req.body);
    if (error) {
        res.status(400).json({ error: error.details[0].message });
        return; // Ensure no further execution
    }
    next();
};

// Validate ID in params
export const validateId = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({ error: "Invalid ID format" });
        return; // Ensure no further execution
    }
    next();
};

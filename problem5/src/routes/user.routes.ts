import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import {
    validateId,
    validateCreateUser,
    validateUpdateUser
} from "../validate/user.validation";

const userController = new UserController();
const router = Router();

router.post("/", validateCreateUser, userController.createUser.bind(userController)); // Create user
router.get("/", userController.getAllUsers.bind(userController)); // Get all user
router.get("/:id", validateId, userController.getUserById.bind(userController)); // Get details user
router.put("/:id", validateUpdateUser, userController.updateUser.bind(userController)); // Update
router.delete("/:id", validateId, userController.deleteUser.bind(userController),); // Delete user

export default router;

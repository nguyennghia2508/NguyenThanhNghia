import express, { Request, Response } from "express";
import connectDatabase from "./db/connection";
import userRoutes from "./routes/user.routes";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json()); // Middleware for parsing JSON
app.get("/", async (req: Request, res: Response) => {
    res.send("Hello!");
});
app.use("/api/user", userRoutes);

// Connect to MongoDB and start the server
connectDatabase();

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

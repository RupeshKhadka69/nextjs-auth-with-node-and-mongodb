import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import dbConnect from "./config/config";
import userRoutes from "./userRoutes/authRoutes";
import { notFound, errorHandler } from "./middleware/errorHandler";
import cors from 'cors'
import cookieParser from 'cookie-parser'
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8000;
dbConnect();
app.use(cors())
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}))
// app.use(notFound);
// app.use(errorHandler);
app.use("/api/user", userRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

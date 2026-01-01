import express from "express";
import dotenv from "dotenv";
import { DBConnection } from "./src/utils/db.js";
import userRouter from "./src/routes/user.route.js";

dotenv.config();

const app = express();
app.use(express.json());


app.use("/api/user",userRouter)


DBConnection();

app.listen(3000, () => {
  console.log("server is running");
});

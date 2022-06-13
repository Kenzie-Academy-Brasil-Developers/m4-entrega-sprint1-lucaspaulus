import express from "express";
import loginRoutes from "./routes/login.routes";
import userRouter from "./routes/users.routes";

const app = express()
app.use(express.json())

app.use("/users", userRouter)
app.use("/login", loginRoutes)
app.listen(3000)

export default app
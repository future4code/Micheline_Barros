import {app} from "./app"
import { userRouter } from "./routes/UserRouter/userRouter"

app.use("/user", userRouter)
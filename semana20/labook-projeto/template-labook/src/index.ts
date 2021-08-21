import {app} from "./app"
import { postRouter } from "./routes/postRouter/postRouter"
import { userRouter } from "./routes/userRouter/userRouter"

app.use("/user", userRouter)


app.use("/post", postRouter)
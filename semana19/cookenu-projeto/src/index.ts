import app from "./app"
import { getProfile } from "./endpoints/getProfile"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signup"




app.post("/signup", signup)

app.post("/user/login", login)

app.get("/user/profile", getProfile)



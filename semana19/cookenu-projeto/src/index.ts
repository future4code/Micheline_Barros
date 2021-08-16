import app from "./app"
import { getProfile } from "./endpoints/getProfile"
import { loginTeste } from "./endpoints/login"
import { signup } from "./endpoints/signup"




app.post("/signup", signup)

app.post("/user/login", loginTeste)

app.get("/user/profile", getProfile)



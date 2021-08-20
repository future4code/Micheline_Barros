import {app} from "./app"
import { signupController } from "./controller/signupController"

app.post("/users/signup", signupController)
import app from "./app"
import { createUser } from "./endpoints/createUser"



app.post("/user", createUser)




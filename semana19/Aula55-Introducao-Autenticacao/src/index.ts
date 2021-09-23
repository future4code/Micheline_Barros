import {app} from "./app"
import { createUser } from "./endpoints/createUser"
import { searchUser } from "./endpoints/searchUser"


app.post("/user/signup", createUser)

app.get("/user/:email", searchUser)
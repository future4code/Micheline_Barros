import { getAllUsersName } from './endpoints/getAllUsersName';
import { app } from "./app";
// import { getAllUsers } from './endpoints/getAllUsers';


// app.get("/users", getAllUsers)

app.get("/users", getAllUsersName)

import { getAllUsersOrder } from './endpoints/getAllUsersOrder';
import { getAllUsersName } from './endpoints/getAllUsersName';
import { app } from "./app";
import { getAllUsersType } from './endpoints/getAllUsersType';
// import { getAllUsers } from './endpoints/getAllUsers';


// app.get("/users", getAllUsers)

// app.get("/users", getAllUsersName)

// app.get("/users/:type", getAllUsersType)

app.get("/users", getAllUsersOrder)
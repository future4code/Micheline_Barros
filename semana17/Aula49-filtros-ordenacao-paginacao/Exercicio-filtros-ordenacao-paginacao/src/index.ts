import { getUsersPage } from './endpoints/getUsersPage';
import { getUsersOrder } from './endpoints/getUsersOrder';
import { getUsersName } from './endpoints/getUsersName';
import { app } from "./app";
import { getUsersType } from './endpoints/getUsersType';
import { getUsersFilterOrderPage } from './endpoints/getUsersFilterOrderPage';
// import { getAllUsers } from './endpoints/getAllUsers';


// app.get("/users", getAllUsers)

// app.get("/users", getUsersName)

// app.get("/users/:type", getUsersType)

// app.get("/users", getUsersOrder)

// app.get("/users", getUsersPage)

app.get("/users", getUsersFilterOrderPage)
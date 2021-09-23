import { signupController } from './controller/users/signupController';
import { app } from "./app";
// import { getTaskById } from './endpoints/getTaskById';
// import { login } from './endpoints/login';


app.post('/user/signup', signupController)
// app.post('/user/login', login)

// app.put('/task', createTaskBusiness)
// app.get('/task/:id', getTaskById)


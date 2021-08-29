import 'reflect-metadata';

import express from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';
import cors from 'cors';

dotenv.config();
const app = express()

//My modules
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
import UsersRouters from './users';


const port = process.env.PORT_APP;
const endpoit = '/api';

//Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(`${endpoit}/users`, UsersRouters);

//Hendler errors Middleware
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(port, () => console.log(`Running on port ${port}`))

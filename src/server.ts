import express, { Application, Request, Response } from 'express';
import { PrismaClient } from './generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg'; 
import dotenv from 'dotenv';
import { createLoginRouter } from './apis/login';
import { createEventsRouter } from './apis/events';
import { createUsersRouter } from './apis/users';
import { createCategoriesRouter } from './apis/categories';
import { authenticate } from './middleware/auth';
import userService from './service/users';
import loginService from './service/login';
import eventsService from './service/events';
import categoriesService from './service/categories';
dotenv.config();

const app: Application = express();
const port = parseInt(process.env.PORT || '3000');

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new PrismaClient({ adapter });

app.use(express.json());
app.use('/login', createLoginRouter(loginService, prisma));
app.use('/events', authenticate, createEventsRouter(eventsService, prisma));
app.use('/users', createUsersRouter(userService, prisma));
app.use('/categories', authenticate, createCategoriesRouter(categoriesService, prisma));

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


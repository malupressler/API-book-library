import cors from 'cors';
import express, { NextFunction } from 'express';
import * as dotenv from "dotenv";
import mongoose from 'mongoose';
import helmet from "helmet";
import * as CRUD from '../service/RouteCrud';

dotenv.config();
const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());


const uri: string= process.env.URL_MONGO_CONNECTION || ''
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const database = mongoose.connection 
database.once('open', async () => {
  console.log('Connected to database successfully');
});

database.on('error', () => {
  console.log(`Error connecting to Mongo database.`);
});
 
const PORT: number = parseInt(process.env.PORT as string, 10);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

const authorisedRoute = express.Router();
app.use("/", authorisedRoute);

app.use((req:any, res:any, next:NextFunction) => {
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE'
  );
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Credentials', "true");
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');

  next();
});

authorisedRoute.get('/', (req:any, res:any) => res.send('Welcome to default response of LibraryBook API'));
authorisedRoute.get('/books', CRUD.getBookList);
authorisedRoute.post('/books',CRUD.createBook);
authorisedRoute.patch('/books/:id',CRUD.updateBook);
authorisedRoute.delete('/books/:id',CRUD.deleteBook);
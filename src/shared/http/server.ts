import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(routes);

app.use(cors());

app.use(express.json());

app.listen(3000, () => {
  console.log('Server started on port 3000!');
});

import * as express from 'express';
import * as cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Welcome to Auth Service!!!!!!!!!!!!');
});

export default app;

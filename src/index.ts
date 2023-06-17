import 'reflect-metadata';
import 'module-alias/register';

import express from 'express';
import bodyParser from 'body-parser';
import { ControllersLoader } from 'simple-ts-express-decorators';
import { NsfwController } from 'app/controllers/NsfwController';

const app = express();

app.use(bodyParser.json());

new ControllersLoader({
  controllers: [NsfwController]
}).load(app);

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Use POST instead of /classify with an `image` field');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

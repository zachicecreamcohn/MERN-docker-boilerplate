import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { env } from 'process';

const app: Application = express();
app.use(bodyParser.json());
app.use(cors());

console.log("updated wowee!");

app.get('/', (req, res) => {
  res.send('Hello World!! 👍');
});

// REST API endpoints will go here
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});


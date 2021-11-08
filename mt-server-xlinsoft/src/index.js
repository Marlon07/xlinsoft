import express from 'express';

// middlewares
import cors from 'cors';
import dotenv from 'dotenv';

// utilities
import connect from './database.js';

// routes
import Routes from './routes/index.js';

// Initialization
dotenv.config();
const app = express();
app.set('port', process.env.PORT);
connect();

// Middlewares
app.use(express.json());
app.use(cors({
  "origin": [process.env.ORIGIN_LOCAL_DOMAIN]
}));

// Routes
app.get('/', (req, resp) => {
  resp.json('Welcome!');
});
app.use('/api', Routes);

// Runing
app.listen(app.get('port'), () => {
  console.log(`Server listening on port ${app.get('port')}`);
});

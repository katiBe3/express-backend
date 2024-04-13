import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import { fetchFromEtsy } from './etsyApi';

dotenv.config();

const app = express();
const port = 3000;

// Route to handle Etsy API calls
app.get('/etsy', fetchFromEtsy);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
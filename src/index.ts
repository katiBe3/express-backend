import express, { Request, Response } from 'express';

const app = express();
const port = 3000;  // Portnummer definieren

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

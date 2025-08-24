import express, { Request, Response } from 'express';
import { createPlan, ActionPlan } from '@falconx/planner';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('FalconX Server is running!');
});

app.post('/plan', (req: Request, res: Response) => {
  const { query } = req.body;
  if (!query) {
    return res.status(400).json({ error: 'Query is required' });
  }
  const plan: ActionPlan = createPlan(query);
  res.json(plan);
});

app.listen(port, () => {
  console.log(`FalconX server listening at http://localhost:${port}`);
});

import cors from 'cors'; // Allow cross-origin requests
import { Request, Response, express } from 'express';

const PORT = 8000;
const app = express(); // Create Express application

app.use(cors()); // Add cors middleware to Express application
app.use(express.json()); // Parse incoming requests with JSON payloads

app.get('/health-check', (req: Request, res: Response) => {
    res.json({message: 'Server is healthy!'});
})

app.listen(PORT, () => {
    console.log('Server is running on port `${PORT}`.')
})
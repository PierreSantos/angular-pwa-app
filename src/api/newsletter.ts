// api/newsletter.ts

import * as express from 'express';
import { Request, Response } from 'express';
const router = express.Router();

// Rota para enviar a newsletter
router.post('/', (req: Request, res: Response) => {
    // Lógica para enviar a newsletter
    console.log('Newsletter enviada!');
    res.status(200).send('Newsletter enviada com sucesso!');
});

export default router;

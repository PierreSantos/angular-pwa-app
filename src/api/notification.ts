// api/notification.ts

import * as express from 'express';
import{ Request, Response } from 'express';
const router = express.Router();

// Rota para lidar com as inscrições de push
router.post('/', (req: Request, res: Response) => {
    // Lógica para lidar com a inscrição de push
    // Aqui você pode salvar os dados da inscrição no banco de dados, por exemplo
    console.log('Nova inscrição de push:', req.body);
    res.status(200).send('Inscrição de push recebida com sucesso!');
});

export default router;

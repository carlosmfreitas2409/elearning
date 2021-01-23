import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import LessonsController from '../controller/LessonsController';

const lessonsRouter = Router();
const lessonsController = new LessonsController();

lessonsRouter.get('/:lesson_id', lessonsController.show);

lessonsRouter.post('/', ensureAuthenticated, lessonsController.create);

lessonsRouter.put('/:lesson_id', ensureAuthenticated, lessonsController.update);

export default lessonsRouter;

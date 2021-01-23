import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import CoursesController from '../controllers/CoursesController';
import LessonsController from '../controllers/LessonsController';

const coursesRouter = Router();
const upload = multer(uploadConfig);

const coursesController = new CoursesController();
const lessonsController = new LessonsController();

coursesRouter.get('/', coursesController.index);

coursesRouter.get('/:course_id', coursesController.show);

coursesRouter.get('/:course_id/lessons', lessonsController.index);

coursesRouter.post(
  '/',
  ensureAuthenticated,
  upload.single('image'),
  coursesController.create,
);

coursesRouter.put(
  '/:course_id',
  ensureAuthenticated,
  upload.single('image'),
  coursesController.update,
);

export default coursesRouter;

import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ShowLessonService from '@modules/lessons/services/ShowLessonService';
import CreateLessonService from '@modules/lessons/services/CreateLessonService';
import UpdateLessonService from '@modules/lessons/services/UpdateLessonService';

export default class LessonsController {
  public async show(request: Request, response: Response): Promise<Response> {
    const { lesson_id } = request.params;

    const showLesson = container.resolve(ShowLessonService);

    const lesson = await showLesson.execute(lesson_id);

    return response.json(lesson);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, course_id, video_id } = request.body;

    const createLesson = container.resolve(CreateLessonService);

    const lesson = await createLesson.execute({
      name,
      description,
      course_id,
      video_id,
    });

    return response.json(lesson);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { lesson_id } = request.params;
    const { name, description, course_id, video_id } = request.body;

    const updateLesson = container.resolve(UpdateLessonService);

    const lesson = await updateLesson.execute({
      lesson_id,
      name,
      description,
      course_id,
      video_id,
    });

    return response.json(lesson);
  }
}

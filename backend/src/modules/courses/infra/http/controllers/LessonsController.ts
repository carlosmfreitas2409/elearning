import { Request, Response } from 'express';
import { container } from 'tsyringe';

import ListCourseLessonsService from '@modules/courses/services/ListCourseLessonsService';

export default class LessonsController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.params;

    const findLessons = container.resolve(ListCourseLessonsService);

    const lessons = await findLessons.execute(course_id);

    return response.json(lessons);
  }
}

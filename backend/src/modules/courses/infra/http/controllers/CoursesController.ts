import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListCoursesService from '@modules/courses/services/ListCoursesService';
import ShowCourseService from '@modules/courses/services/ShowCourseService';
import CreateCourseService from '@modules/courses/services/CreateCourseService';
import UpdateCourseService from '@modules/courses/services/UpdateCourseService';

export default class CoursesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const { name_like } = request.query;

    const findCourses = container.resolve(ListCoursesService);

    const courses = await findCourses.execute({
      name_like: name_like && String(name_like),
    });

    return response.json(classToClass(courses));
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.params;

    const showCourse = container.resolve(ShowCourseService);

    const course = await showCourse.execute(course_id);

    return response.json(classToClass(course));
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name } = request.body;

    const createCourse = container.resolve(CreateCourseService);

    const course = await createCourse.execute({
      name,
      imageFilename: request.file.filename,
    });

    return response.json(classToClass(course));
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.params;
    const { name } = request.body;

    const updateCourse = container.resolve(UpdateCourseService);

    const course = await updateCourse.execute({
      course_id,
      name,
      imageFilename: request.file.filename,
    });

    return response.json(classToClass(course));
  }
}

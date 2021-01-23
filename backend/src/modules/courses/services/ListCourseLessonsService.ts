import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import Lesson from '@modules/lessons/infra/typeorm/entities/Lesson';
import ICoursesRepository from '../repositories/ICoursesRepository';

@injectable()
class ListLessonsOnCourseService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,
  ) {}

  public async execute(course_id: string): Promise<Lesson[]> {
    const course = await this.coursesRepository.findById(course_id);

    if (!course) {
      throw new AppError('Course does not exist');
    }

    return course.lessons;
  }
}

export default ListLessonsOnCourseService;

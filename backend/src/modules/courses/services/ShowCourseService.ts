import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import ICoursesRepository from '../repositories/ICoursesRepository';

import Course from '../infra/typeorm/entities/Course';

@injectable()
class ShowCourseService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,
  ) {}

  public async execute(id: string): Promise<Course> {
    const course = await this.coursesRepository.findById(id);

    if (!course) {
      throw new AppError('Course does not exists');
    }

    return course;
  }
}

export default ShowCourseService;

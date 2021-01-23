import { inject, injectable } from 'tsyringe';

import ICoursesRepository from '../repositories/ICoursesRepository';

import Course from '../infra/typeorm/entities/Course';

interface IRequest {
  name_like?: string;
}

@injectable()
class ListUsersService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,
  ) {}

  public async execute({ name_like }: IRequest): Promise<Course[]> {
    const courses = await this.coursesRepository.findAllCourses(name_like);

    return courses;
  }
}

export default ListUsersService;

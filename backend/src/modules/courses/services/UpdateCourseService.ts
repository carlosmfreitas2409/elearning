import { inject, injectable } from 'tsyringe';
import AppError from '@shared/errors/AppError';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import ICoursesRepository from '../repositories/ICoursesRepository';

import Course from '../infra/typeorm/entities/Course';

interface IRequest {
  course_id: string;
  name: string;
  imageFilename: string;
}

@injectable()
class UpdateCourseService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({
    course_id,
    name,
    imageFilename,
  }: IRequest): Promise<Course> {
    const course = await this.coursesRepository.findById(course_id);

    if (!course) {
      throw new AppError('Course does not exists');
    }

    if (course.image) {
      await this.storageProvider.deleteFile(course.image);
    }

    const image = await this.storageProvider.saveFile(imageFilename);

    course.name = name;
    course.image = image;

    await this.coursesRepository.save(course);

    return course;
  }
}

export default UpdateCourseService;

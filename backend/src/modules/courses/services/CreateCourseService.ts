import { inject, injectable } from 'tsyringe';

import IStorageProvider from '@shared/container/providers/StorageProvider/models/IStorageProvider';
import ICoursesRepository from '../repositories/ICoursesRepository';

import Course from '../infra/typeorm/entities/Course';

interface IRequest {
  name: string;
  imageFilename: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('CoursesRepository')
    private coursesRepository: ICoursesRepository,

    @inject('StorageProvider')
    private storageProvider: IStorageProvider,
  ) {}

  public async execute({ name, imageFilename }: IRequest): Promise<Course> {
    const image = await this.storageProvider.saveFile(imageFilename);

    const course = await this.coursesRepository.create({
      name,
      image,
    });

    return course;
  }
}

export default CreateUserService;

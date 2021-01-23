import { getRepository, Like, Repository } from 'typeorm';

import ICoursesRepository from '@modules/courses/repositories/ICoursesRepository';
import ICreateCourseDTO from '@modules/courses/dtos/ICreateCourseDTO';

import Course from '../entities/Course';

class CoursesRepository implements ICoursesRepository {
  private ormRepository: Repository<Course>;

  constructor() {
    this.ormRepository = getRepository(Course);
  }

  public async findAllCourses(name_like?: string): Promise<Course[]> {
    if (name_like) {
      return this.ormRepository.find({
        relations: ['lessons'],
        where: {
          name: Like(`%${name_like}%`),
        },
      });
    }

    return this.ormRepository.find({
      relations: ['lessons'],
    });
  }

  public async findById(id: string): Promise<Course | undefined> {
    return this.ormRepository.findOne(id, {
      relations: ['lessons'],
    });
  }

  public async create(courseData: ICreateCourseDTO): Promise<Course> {
    const course = this.ormRepository.create(courseData);

    await this.ormRepository.save(course);

    return course;
  }

  public async save(course: Course): Promise<Course> {
    return this.ormRepository.save(course);
  }
}

export default CoursesRepository;

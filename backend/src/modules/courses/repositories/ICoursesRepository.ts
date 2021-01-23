import ICreateCourseDTO from '../dtos/ICreateCourseDTO';
import Course from '../infra/typeorm/entities/Course';

export default interface ICoursesRepository {
  findAllCourses(name_like?: string): Promise<Course[]>;
  findById(course_id: string): Promise<Course | undefined>;
  create(data: ICreateCourseDTO): Promise<Course>;
  save(course: Course): Promise<Course>;
}

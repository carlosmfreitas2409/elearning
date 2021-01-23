import ICreateLessonDTO from '../dtos/ICreateLessonDTO';
import Lesson from '../infra/typeorm/entities/Lesson';

export default interface ILessonsRepository {
  findByAllByCourseId(course_id: string): Promise<Lesson[]>;
  findById(id: string): Promise<Lesson | undefined>;
  create(data: ICreateLessonDTO): Promise<Lesson>;
  save(lesson: Lesson): Promise<Lesson>;
}

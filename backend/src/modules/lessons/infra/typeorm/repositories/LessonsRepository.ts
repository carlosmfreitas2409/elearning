import { getRepository, Repository } from 'typeorm';

import ILessonsRepository from '@modules/lessons/repositories/ILessonsRepository';

import ICreateLessonDTO from '@modules/lessons/dtos/ICreateLessonDTO';
import Lesson from '../entities/Lesson';

class LessonsRepository implements ILessonsRepository {
  private ormRepository: Repository<Lesson>;

  constructor() {
    this.ormRepository = getRepository(Lesson);
  }

  public async findByAllByCourseId(course_id: string): Promise<Lesson[]> {
    return this.ormRepository.find({
      where: { course_id },
      order: { created_at: 'ASC' },
    });
  }

  public async findById(id: string): Promise<Lesson | undefined> {
    return this.ormRepository.findOne(id);
  }

  public async create(lessonData: ICreateLessonDTO): Promise<Lesson> {
    const lesson = this.ormRepository.create(lessonData);

    await this.ormRepository.save(lesson);

    return lesson;
  }

  public async save(lesson: Lesson): Promise<Lesson> {
    return this.ormRepository.save(lesson);
  }
}

export default LessonsRepository;

import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import ILessonsRepository from '../repositories/ILessonsRepository';
import Lesson from '../infra/typeorm/entities/Lesson';

@injectable()
class ShowLessonService {
  constructor(
    @inject('LessonsRepository')
    private lessonsRepository: ILessonsRepository,
  ) {}

  public async execute(id: string): Promise<Lesson> {
    const lesson = await this.lessonsRepository.findById(id);

    if (!lesson) {
      throw new AppError('Lesson does not exists');
    }

    return lesson;
  }
}

export default ShowLessonService;

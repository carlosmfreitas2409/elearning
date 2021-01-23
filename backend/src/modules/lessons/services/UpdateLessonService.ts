import { inject, injectable } from 'tsyringe';
import { parse, toSeconds } from 'iso8601-duration';
import fetch from 'node-fetch';

import AppError from '@shared/errors/AppError';
import ILessonsRepository from '../repositories/ILessonsRepository';
import Lesson from '../infra/typeorm/entities/Lesson';

interface IRequest {
  lesson_id: string;
  name: string;
  description: string;
  course_id: string;
  video_id: string;
}

interface IYTResponse {
  items: Array<{
    contentDetails: {
      duration: string;
    };
  }>;
}

@injectable()
class UpdateLessonService {
  constructor(
    @inject('LessonsRepository')
    private lessonsRepository: ILessonsRepository,
  ) {}

  public async execute({
    lesson_id,
    name,
    description,
    course_id,
    video_id,
  }: IRequest): Promise<Lesson> {
    const lesson = await this.lessonsRepository.findById(lesson_id);

    if (!lesson) {
      throw new AppError('Lesson does not exist');
    }

    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&id=${video_id}&key=${process.env.YOUTUBE_API_KEY}`,
    );
    const video: IYTResponse = await response.json();

    if (!video.items[0]) {
      throw new AppError('Youtube video not found');
    }

    const { duration: durationISO } = video.items[0].contentDetails;
    const duration = toSeconds(parse(durationISO));

    lesson.name = name;
    lesson.description = description;
    lesson.duration = duration;
    lesson.course_id = course_id;
    lesson.video_id = video_id;

    await this.lessonsRepository.save(lesson);

    return lesson;
  }
}

export default UpdateLessonService;

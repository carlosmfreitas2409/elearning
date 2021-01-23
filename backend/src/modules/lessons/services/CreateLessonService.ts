import { inject, injectable } from 'tsyringe';
import { parse, toSeconds } from 'iso8601-duration';
import fetch from 'node-fetch';

import AppError from '@shared/errors/AppError';
import ILessonsRepository from '../repositories/ILessonsRepository';
import Lesson from '../infra/typeorm/entities/Lesson';

interface IRequest {
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
class CreateLessonService {
  constructor(
    @inject('LessonsRepository')
    private lessonsRepository: ILessonsRepository,
  ) {}

  public async execute({
    name,
    description,
    course_id,
    video_id,
  }: IRequest): Promise<Lesson> {
    const response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=contentDetails&id=${video_id}&key=${process.env.YOUTUBE_API_KEY}`,
    );
    const video: IYTResponse = await response.json();

    if (!video.items[0]) {
      throw new AppError('Youtube video not found');
    }

    const { duration: durationISO } = video.items[0].contentDetails;
    const duration = toSeconds(parse(durationISO));

    const lesson = await this.lessonsRepository.create({
      name,
      description,
      duration,
      course_id,
      video_id,
    });

    return lesson;
  }
}

export default CreateLessonService;

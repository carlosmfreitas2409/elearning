const formatLesson = (lessonIndex: number): string => {
  const lessonNumber = lessonIndex + 1;

  if (lessonNumber < 10) {
    return `Aula 0${lessonNumber}`;
  }

  return `Aula ${lessonNumber}`;
};

export default formatLesson;

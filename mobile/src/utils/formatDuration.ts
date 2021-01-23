import { addSeconds, format } from 'date-fns';

const formatDuration = (seconds?: number): string => {
  if (seconds) {
    const duration = addSeconds(new Date(0), seconds);

    return format(duration, "mm 'min'");
  }

  return 'min';
};

export default formatDuration;

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Lesson {
  id: string;
  name: string;
  description: string;
  completed: boolean;
}

interface Course {
  lessons: Lesson[];
}

interface LessonContextData {
  completedLessons: Lesson[];
  lessons: Lesson[];
  loading: boolean;
  courseLessons(course: Course): Promise<void>;
  completeLesson(lesson: Omit<Lesson, 'completed'>): Promise<void>;
}

const LessonContext = createContext<LessonContextData>({} as LessonContextData);

const LessonProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<Lesson[]>([] as Lesson[]);
  const [lessons, setLessons] = useState<Lesson[]>([] as Lesson[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const completedLessons = await AsyncStorage.getItem('@elearning:lessons');

      if (completedLessons) {
        setData(JSON.parse(completedLessons));
      }

      setLoading(false);
    }

    loadStoragedData();
  });

  const courseLessons = useCallback(async (course: Course) => {
    setLessons(course.lessons);
  }, []);

  const completeLesson = useCallback(
    async (lesson: Omit<Lesson, 'completed'>) => {
      const formatedLesson = {
        ...lesson,
        completed: true,
      };

      await AsyncStorage.setItem(
        '@elearning:lessons',
        JSON.stringify([...data, formatedLesson]),
      );

      setData([...data, formatedLesson]);
    },
    [data],
  );

  return (
    <LessonContext.Provider
      value={{
        lessons,
        completedLessons: data,
        loading,
        courseLessons,
        completeLesson,
      }}
    >
      {children}
    </LessonContext.Provider>
  );
};

function useLesson(): LessonContextData {
  const context = useContext(LessonContext);

  if (!context) {
    throw new Error('useLesson must be used within an LessonProvider');
  }

  return context;
}

export { LessonProvider, useLesson };

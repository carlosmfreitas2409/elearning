import React from 'react';

import { LessonProvider } from './lesson';

const AppProvider: React.FC = ({ children }) => (
  <LessonProvider>{children}</LessonProvider>
);

export default AppProvider;

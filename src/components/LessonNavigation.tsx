import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Chapter } from '../types/lesson';

interface LessonNavigationProps {
  chapters: Chapter[];
  currentChapterId: string;
  currentLessonId: string;
  onNavigate: (chapterId: string, lessonId: string) => void;
}

export function LessonNavigation({
  chapters,
  currentChapterId,
  currentLessonId,
  onNavigate,
}: LessonNavigationProps) {
  // Find current chapter and lesson indices
  const currentChapterIndex = chapters.findIndex((c) => c.id === currentChapterId);
  const currentChapter = chapters[currentChapterIndex];
  const currentLessonIndex = currentChapter?.lessons.findIndex(
    (l) => l.id === currentLessonId
  );

  const navigate = (direction: 'prev' | 'next') => {
    if (currentChapterIndex === -1 || currentLessonIndex === -1) return;

    if (direction === 'prev') {
      if (currentLessonIndex > 0) {
        // Previous lesson in same chapter
        onNavigate(currentChapterId, currentChapter.lessons[currentLessonIndex - 1].id);
      } else if (currentChapterIndex > 0) {
        // Last lesson of previous chapter
        const prevChapter = chapters[currentChapterIndex - 1];
        const lastLesson = prevChapter.lessons[prevChapter.lessons.length - 1];
        onNavigate(prevChapter.id, lastLesson.id);
      }
    } else {
      if (currentLessonIndex < currentChapter.lessons.length - 1) {
        // Next lesson in same chapter
        onNavigate(currentChapterId, currentChapter.lessons[currentLessonIndex + 1].id);
      } else if (currentChapterIndex < chapters.length - 1) {
        // First lesson of next chapter
        const nextChapter = chapters[currentChapterIndex + 1];
        onNavigate(nextChapter.id, nextChapter.lessons[0].id);
      }
    }
  };

  const isFirstLesson = currentChapterIndex === 0 && currentLessonIndex === 0;
  const isLastLesson = 
    currentChapterIndex === chapters.length - 1 && 
    currentLessonIndex === currentChapter?.lessons.length - 1;

  return (
    <div className="flex justify-between items-center p-4 border-t border-gray-200 mt-6">
      <button
        onClick={() => navigate('prev')}
        disabled={isFirstLesson}
        className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft className="w-4 h-4 mr-2" />
        Previous Lesson
      </button>
      <button
        onClick={() => navigate('next')}
        disabled={isLastLesson}
        className="flex items-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next Lesson
        <ChevronRight className="w-4 h-4 ml-2" />
      </button>
    </div>
  );
}
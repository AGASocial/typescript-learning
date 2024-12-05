import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronRight } from 'lucide-react';
import { Chapter } from '../types/lesson';

interface ChapterListProps {
  chapters: Chapter[];
  currentChapterId: string;
  currentLessonId: string;
  onNavigate: (chapterId: string, lessonId: string) => void;
}

export function ChapterList({
  chapters,
  currentChapterId,
  currentLessonId,
  onNavigate,
}: ChapterListProps) {
  const [expandedChapters, setExpandedChapters] = useState<string[]>([currentChapterId]);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev =>
      prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      <div className="flex items-center p-4 border-b border-gray-200">
        <BookOpen className="w-5 h-5 text-indigo-600 mr-2" />
        <h2 className="text-lg font-semibold">TypeScript Lessons</h2>
      </div>
      <div className="divide-y divide-gray-200">
        {chapters.map((chapter) => (
          <div key={chapter.id} className="overflow-hidden">
            <button
              onClick={() => toggleChapter(chapter.id)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-gray-900">{chapter.title}</span>
              {expandedChapters.includes(chapter.id) ? (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronRight className="w-5 h-5 text-gray-500" />
              )}
            </button>
            <div
              className={`transition-all duration-200 ease-in-out ${
                expandedChapters.includes(chapter.id)
                  ? 'max-h-[1000px] opacity-100'
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-gray-50 px-4 py-2 space-y-1">
                {chapter.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => onNavigate(chapter.id, lesson.id)}
                    className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                      currentChapterId === chapter.id && currentLessonId === lesson.id
                        ? 'bg-indigo-100 text-indigo-700'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{lesson.title}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        lesson.difficulty === 'beginner' ? 'bg-green-100 text-green-800' :
                        lesson.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {lesson.difficulty}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
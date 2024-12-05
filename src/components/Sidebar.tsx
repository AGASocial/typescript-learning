import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronRight, GraduationCap, BookOpenCheck } from 'lucide-react';
import { Chapter } from '../types/lesson';

interface SidebarProps {
  chapters: Chapter[];
  currentChapterId: string;
  currentLessonId: string;
  onNavigate: (chapterId: string, lessonId: string) => void;
}

export function Sidebar({
  chapters,
  currentChapterId,
  currentLessonId,
  onNavigate,
}: SidebarProps) {
  const [expandedChapters, setExpandedChapters] = useState<string[]>([currentChapterId]);

  const toggleChapter = (chapterId: string) => {
    setExpandedChapters(prev =>
      prev.includes(chapterId)
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const currentChapter = chapters.find(c => c.id === currentChapterId);
  const currentLessonIndex = currentChapter?.lessons.findIndex(l => l.id === currentLessonId) ?? 0;

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-gradient-to-b from-indigo-700 to-indigo-900 px-4 pb-4">
      <div className="flex h-16 shrink-0 items-center">
        <div className="flex items-center gap-2">
          <GraduationCap className="h-8 w-8 shrink-0 text-white" />
          <span className="text-xl font-bold text-white truncate">TypeScript Learning</span>
        </div>
      </div>
      <nav className="flex flex-1 flex-col min-w-0">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li className="flex-1 overflow-y-auto min-w-0">
            <div className="text-xs font-semibold leading-6 text-indigo-200 uppercase tracking-wider sticky top-0 bg-gradient-to-b from-indigo-700 to-indigo-700/95 py-2 z-10">
              Learning Path
            </div>
            <ul role="list" className="mt-2 space-y-1">
              {chapters.map((chapter) => (
                <li key={chapter.id} className="mb-2 min-w-0">
                  <div>
                    <button
                      onClick={() => toggleChapter(chapter.id)}
                      className={`group flex w-full items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 transition-all duration-200 ${
                        currentChapterId === chapter.id
                          ? 'bg-indigo-500/20 text-white'
                          : 'text-indigo-200 hover:bg-indigo-500/10 hover:text-white'
                      }`}
                    >
                      {currentChapterId === chapter.id ? (
                        <BookOpenCheck className="h-5 w-5 shrink-0 text-indigo-300" />
                      ) : (
                        <BookOpen className="h-5 w-5 shrink-0" />
                      )}
                      <span className="flex-1 text-left line-clamp-2">{chapter.title}</span>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs px-2 py-1 rounded-full bg-indigo-500/20">
                          {chapter.lessons.length}
                        </span>
                        {expandedChapters.includes(chapter.id) ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronRight className="h-4 w-4" />
                        )}
                      </div>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out ${
                        expandedChapters.includes(chapter.id) ? 'opacity-100' : 'h-0 opacity-0 overflow-hidden'
                      }`}
                    >
                      <div className="space-y-1 py-2 pl-4">
                        {chapter.lessons.map((lesson, index) => (
                          <button
                            key={lesson.id}
                            onClick={() => onNavigate(chapter.id, lesson.id)}
                            className={`group w-full text-left rounded-md py-2 px-3 text-sm transition-colors duration-150 ${
                              currentChapterId === chapter.id && currentLessonId === lesson.id
                                ? 'bg-indigo-500/20 text-white'
                                : 'text-indigo-200 hover:bg-indigo-500/10 hover:text-white'
                            }`}
                          >
                            <div className="flex items-start gap-3">
                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-xs font-medium mt-0.5">
                                {String(index + 1).padStart(2, '0')}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div className="leading-5 mb-1">{lesson.title}</div>
                                <span
                                  className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${
                                    lesson.difficulty === 'beginner'
                                      ? 'bg-green-500/20 text-green-300'
                                      : lesson.difficulty === 'intermediate'
                                      ? 'bg-yellow-500/20 text-yellow-300'
                                      : 'bg-red-500/20 text-red-300'
                                  }`}
                                >
                                  {lesson.difficulty}
                                </span>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
          <li className="mt-auto pt-4 border-t border-indigo-600">
            <div className="text-xs font-semibold leading-6 text-indigo-200 uppercase tracking-wider">
              Progress
            </div>
            <div className="mt-2 text-sm text-indigo-200">
              {chapters.map(chapter => (
                <div key={chapter.id} className="mb-3">
                  <div className="flex justify-between mb-1 text-xs">
                    <span className="truncate">{chapter.title}</span>
                    <span className="shrink-0 ml-2">0/{chapter.lessons.length}</span>
                  </div>
                  <div className="w-full bg-indigo-950/50 rounded-full h-1.5">
                    <div 
                      className="bg-indigo-300 h-1.5 rounded-full transition-all duration-300" 
                      style={{ width: '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
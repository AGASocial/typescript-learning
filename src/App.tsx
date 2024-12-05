import React, { useState } from 'react';
import { Editor } from './components/Editor';
import { LessonView } from './components/LessonView';
import { LessonNavigation } from './components/LessonNavigation';
import { Sidebar } from './components/Sidebar';
import { TheoryList } from './components/TheoryList';
import { chapters } from './data/lessons';
import { Menu, X, GraduationCap, BookOpen } from 'lucide-react';

export function App() {
  const [currentChapterId, setCurrentChapterId] = useState(chapters[0].id);
  const [currentLessonId, setCurrentLessonId] = useState(chapters[0].lessons[0].id);
  const [code, setCode] = useState(chapters[0].lessons[0].initialCode);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showTheory, setShowTheory] = useState(false);

  const currentChapter = chapters.find((c) => c.id === currentChapterId);
  const currentLesson = currentChapter?.lessons.find((l) => l.id === currentLessonId);

  const handleNavigate = (chapterId: string, lessonId: string) => {
    setCurrentChapterId(chapterId);
    setCurrentLessonId(lessonId);
    const chapter = chapters.find((c) => c.id === chapterId);
    const lesson = chapter?.lessons.find((l) => l.id === lessonId);
    if (lesson) {
      setCode(lesson.initialCode);
    }
    setSidebarOpen(false);
  };

  if (!currentLesson || !currentChapter) return null;

  if (showTheory) {
    return (
      <div>
        <button
          onClick={() => setShowTheory(false)}
          className="fixed top-4 right-4 z-50 bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors flex items-center gap-2"
        >
          <GraduationCap className="w-5 h-5" />
          Back to Practice
        </button>
        <TheoryList />
      </div>
    );
  }

  return (
    <div className="h-screen flex">
      {/* Mobile sidebar */}
      <div className="relative z-50 lg:hidden">
        {sidebarOpen && (
          <div className="fixed inset-0 bg-gray-900/80" onClick={() => setSidebarOpen(false)} />
        )}

        <div
          className={`fixed inset-0 flex transform transition-transform duration-300 ease-in-out ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="relative mr-16 flex w-full max-w-xs flex-1">
            <div className="absolute right-0 top-0 -mr-12 pt-4">
              <button
                type="button"
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <span className="sr-only">Close sidebar</span>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <Sidebar
              chapters={chapters}
              currentChapterId={currentChapterId}
              currentLessonId={currentLessonId}
              onNavigate={handleNavigate}
            />
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72">
        <Sidebar
          chapters={chapters}
          currentChapterId={currentChapterId}
          currentLessonId={currentLessonId}
          onNavigate={handleNavigate}
        />
      </div>

      <div className="flex flex-1 flex-col lg:pl-72">
        <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <button
            type="button"
            className="-m-2.5 p-2.5 text-gray-700 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex flex-1 items-center gap-x-4">
            <div className="flex items-center gap-x-3">
              <GraduationCap className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="text-sm font-medium text-gray-500">{currentChapter.title}</p>
                <h1 className="text-lg font-semibold text-gray-900">{currentLesson.title}</h1>
              </div>
            </div>
            <button
              onClick={() => setShowTheory(true)}
              className="ml-auto flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-md hover:bg-indigo-100 transition-colors"
            >
              <BookOpen className="w-5 h-5" />
              View Theory
            </button>
            <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
              currentLesson.difficulty === 'beginner'
                ? 'bg-green-100 text-green-700'
                : currentLesson.difficulty === 'intermediate'
                ? 'bg-yellow-100 text-yellow-700'
                : 'bg-red-100 text-red-700'
            }`}>
              {currentLesson.difficulty}
            </span>
          </div>
        </div>

        <main className="flex-1 flex flex-col">
          <div className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-8rem)]">
              <div className="flex-1 min-h-0">
                <LessonView lesson={currentLesson} />
              </div>
              <div className="lg:w-[45%] flex flex-col min-h-0">
                <div className="flex-1">
                  <Editor code={code} onChange={setCode} />
                </div>
                <div className="mt-4">
                  <LessonNavigation
                    chapters={chapters}
                    currentChapterId={currentChapterId}
                    currentLessonId={currentLessonId}
                    onNavigate={handleNavigate}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
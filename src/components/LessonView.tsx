import React, { useState } from 'react';
import { Book, Code, Eye, EyeOff, BookOpen, MinusCircle } from 'lucide-react';
import { Lesson } from '../types/lesson';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface LessonViewProps {
  lesson: Lesson;
}

export function LessonView({ lesson }: LessonViewProps) {
  const [showSolution, setShowSolution] = useState(false);
  const [showTheory, setShowTheory] = useState(false);

  return (
    <div className="bg-white rounded-lg p-6 w-full h-full flex flex-col">
      <div className="flex-1 overflow-y-auto min-h-0">
        {lesson.theory && (
          <div className="mb-6">
            <button
              onClick={() => setShowTheory(!showTheory)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 mb-4"
            >
              {showTheory ? (
                <>
                  <MinusCircle size={16} />
                  Hide Theory
                </>
              ) : (
                <>
                  <BookOpen size={16} />
                  Show Theory
                </>
              )}
            </button>
            
            {showTheory && (
              <div className="prose prose-indigo max-w-none mb-6 p-4 bg-gray-50 rounded-lg">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({node, ...props}) => <h1 className="text-2xl font-bold mb-4" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-xl font-semibold mt-6 mb-3" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-lg font-semibold mt-4 mb-2" {...props} />,
                    p: ({node, ...props}) => <p className="mb-4 text-gray-700" {...props} />,
                    ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                    li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
                    code: ({node, inline, ...props}) => 
                      inline ? (
                        <code className="px-1.5 py-0.5 rounded-md bg-gray-100 text-indigo-600 font-mono text-sm" {...props} />
                      ) : (
                        <code className="block bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto font-mono text-sm" {...props} />
                      ),
                    pre: ({node, ...props}) => <pre className="mt-2 mb-4" {...props} />,
                    a: ({node, ...props}) => (
                      <a 
                        {...props} 
                        className="text-indigo-600 hover:text-indigo-800 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      />
                    ),
                  }}
                >
                  {lesson.theory}
                </ReactMarkdown>
              </div>
            )}
          </div>
        )}

        <div className="prose prose-indigo max-w-none">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({node, ...props}) => <h1 className="text-3xl font-bold mb-4 pb-2 border-b" {...props} />,
              h2: ({node, ...props}) => <h2 className="text-2xl font-semibold mt-6 mb-4" {...props} />,
              h3: ({node, ...props}) => <h3 className="text-xl font-semibold mt-4 mb-2" {...props} />,
              p: ({node, ...props}) => <p className="mb-4 text-gray-700 leading-relaxed" {...props} />,
              ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
              li: ({node, ...props}) => <li className="text-gray-700" {...props} />,
              code: ({node, inline, ...props}) => 
                inline ? (
                  <code className="px-1.5 py-0.5 rounded-md bg-gray-100 text-indigo-600 font-mono text-sm" {...props} />
                ) : (
                  <code className="block bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto font-mono text-sm" {...props} />
                ),
              pre: ({node, ...props}) => <pre className="mt-2 mb-4" {...props} />,
            }}
          >
            {lesson.instructions}
          </ReactMarkdown>
        </div>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Hints</h3>
          <ul className="list-disc list-inside space-y-2 mb-6">
            {lesson.hints.map((hint, index) => (
              <li key={index} className="text-gray-600">{hint}</li>
            ))}
          </ul>
          
          <div className="border-t pt-6">
            <button
              onClick={() => setShowSolution(!showSolution)}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-md transition-colors duration-150 bg-indigo-50 text-indigo-700 hover:bg-indigo-100"
            >
              {showSolution ? (
                <>
                  <EyeOff size={16} />
                  Hide Solution
                </>
              ) : (
                <>
                  <Eye size={16} />
                  Show Solution
                </>
              )}
            </button>
            
            {showSolution && (
              <div className="mt-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
                    <Code size={16} />
                    Solution
                  </div>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
                    <code className="font-mono text-sm">{lesson.solution}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
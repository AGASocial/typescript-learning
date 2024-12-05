import React from 'react';
import { TheoryTopic } from '../../data/theory/theory';
import { Book } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface TheoryContentProps {
  selectedTopic: TheoryTopic | null;
}

export function TheoryContent({ selectedTopic }: TheoryContentProps) {
  if (!selectedTopic) {
    return (
      <div className="text-center text-gray-500">
        <Book className="w-12 h-12 mx-auto mb-4" />
        <p>Select a lesson to view its theory</p>
      </div>
    );
  }

  return (
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
        {selectedTopic.content}
      </ReactMarkdown>
    </div>
  );
}
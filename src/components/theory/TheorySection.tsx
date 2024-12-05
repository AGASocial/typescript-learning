import React from 'react';
import { TheoryTopic } from '../../data/theory/theory';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface TheorySectionProps {
  title: string;
  topics: TheoryTopic[];
  expandedSection: string | null;
  selectedTopic: string | null;
  onToggleSection: (section: string) => void;
  onSelectTopic: (topic: TheoryTopic) => void;
}

export function TheorySection({
  title,
  topics,
  expandedSection,
  selectedTopic,
  onToggleSection,
  onSelectTopic
}: TheorySectionProps) {
  const isExpanded = expandedSection === title;

  return (
    <div className="mb-4">
      <button
        onClick={() => onToggleSection(title)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-900">{title}</span>
        {isExpanded ? (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-500" />
        )}
      </button>
      {isExpanded && (
        <div className="bg-gray-50 px-4 py-2">
          {topics.map((topic) => (
            <button
              key={topic.id}
              onClick={() => onSelectTopic(topic)}
              className={`w-full text-left px-4 py-2 rounded-md text-sm transition-colors ${
                selectedTopic === topic.id
                  ? 'bg-indigo-100 text-indigo-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {topic.title}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
import React, { useState } from 'react';
import { GraduationCap } from 'lucide-react';
import { theory, TheoryTopic } from '../data/theory/theory';
import { TheorySection } from './theory/TheorySection';
import { TheoryContent } from './theory/TheoryContent';

export function TheoryList() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<TheoryTopic | null>(null);

  const handleToggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleSelectTopic = (topic: TheoryTopic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">TypeScript Theory</h1>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 px-4">
        <div className="grid grid-cols-12 gap-6">
          {/* Theory Sections List */}
          <div className="col-span-4">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              {theory.map((section) => (
                <TheorySection
                  key={section.title}
                  title={section.title}
                  topics={section.topics}
                  expandedSection={expandedSection}
                  selectedTopic={selectedTopic?.id || null}
                  onToggleSection={handleToggleSection}
                  onSelectTopic={handleSelectTopic}
                />
              ))}
            </div>
          </div>

          {/* Theory Content */}
          <div className="col-span-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <TheoryContent selectedTopic={selectedTopic} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
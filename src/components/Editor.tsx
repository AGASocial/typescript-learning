import React from 'react';
import { Moon } from 'lucide-react';

interface EditorProps {
  code: string;
  onChange: (value: string) => void;
}

export function Editor({ code, onChange }: EditorProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-4 w-full h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"/>
          <div className="w-3 h-3 rounded-full bg-yellow-500"/>
          <div className="w-3 h-3 rounded-full bg-green-500"/>
        </div>
        <div className="flex items-center text-gray-400">
          <Moon size={16} className="mr-2"/>
          <span className="text-sm">script.ts</span>
        </div>
      </div>
      <textarea
        className="flex-1 w-full bg-transparent text-gray-100 font-mono resize-none focus:outline-none"
        value={code}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
      />
    </div>
  );
}
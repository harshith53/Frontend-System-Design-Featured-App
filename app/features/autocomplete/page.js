"use client";
import { useState } from "react";
import ClientLayout from '../../layouts/ClientLayout';
// Autocomplete Component
const AutocompleteComponent = () => {
  const suggestions = ["React", "Next.js", "Tailwind", "JavaScript", "TypeScript"];
  const [input, setInput] = useState("");
  const filtered = suggestions.filter((s) => s.toLowerCase().includes(input.toLowerCase()));

  return (
    <div className="relative w-full max-w-md mx-auto mt-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full px-4 py-2 border rounded bg-gray-900 text-white"
        placeholder="Start typing..."
      />
      {input && (
        <ul className="absolute w-full bg-gray-800 text-white mt-2 rounded shadow-lg">
          {filtered.length > 0 ? (
            filtered.map((s, index) => (
              <li key={index} className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
                {s}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No suggestions found</li>
          )}
        </ul>
      )}
    </div>
  );
};

// Autocomplete Feature Page
export default function AutocompletePage() {
  return (
    <ClientLayout>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-white">Autocomplete Feature</h1>
      <p className="text-gray-300 mt-2">An intelligent input field with real-time suggestions.</p>
      <AutocompleteComponent />
    </div>
    </ClientLayout>
  );
}
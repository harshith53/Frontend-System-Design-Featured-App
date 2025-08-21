'use client'

import { useState } from "react";
import ClientLayout from "../layouts/ClientLayout";

export default function AIPage() {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [timeTaken, setTimeTaken] = useState(null);

  const handleAsk = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setError("");
    setResponse("");
    setTimeTaken(null);

    const start = Date.now(); // start timer
    try {
      const res = await fetch("/api/ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Request failed");
      }

      setResponse(data.result || "");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong";
      setError(message);
    } finally {
      const end = Date.now(); // end timer
      setTimeTaken(parseFloat(((end - start) / 1000).toFixed(2)));
      setLoading(false);
    }
  };

  return (
    <ClientLayout>
      <div className="flex flex-col h-[calc(100vh-4rem)] max-w-3xl mx-auto rounded-lg shadow bg-white">
        {/* Header */}
        <div className="p-4 border-b text-center font-bold text-xl text-gray-800">
          Ask <span className="text-blue-600">DesignCopilot</span>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {error && (
            <div className="p-4 border-l-4 border-red-500 bg-red-50 text-red-700 rounded">
              <p className="font-semibold">⚠️ Error</p>
              <p>{error}</p>
            </div>
          )}

          {response && (
            <>
              {/* User message */}
              <div className="flex justify-end">
                <div className="bg-blue-600 text-white p-3 rounded-xl max-w-xs shadow">
                  {prompt}
                </div>
              </div>

              {/* AI response */}
              <div className="flex justify-start">
                <div className="bg-gray-100 p-3 rounded-xl max-w-md shadow">
                  <p className="text-gray-800 whitespace-pre-line leading-relaxed">
                    {response}
                  </p>
                  {timeTaken && (
                    <p className="text-xs text-gray-500 mt-2">
                      ⏱ Response time: {timeTaken} sec
                    </p>
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Input area fixed at bottom */}
        <div className="p-4 bg-white ">
          <div className="flex items-end space-x-2">
            <textarea
              className="flex-1 border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none transition"
              rows={2}
              placeholder="Type your message..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <button
              onClick={handleAsk}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg shadow transition disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading || !prompt.trim()}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
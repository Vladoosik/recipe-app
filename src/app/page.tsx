"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Dropdown from "@/components/dropdown";

const cuisines = [
  { id: 1, name: "Italian" },
  { id: 2, name: "Japanese" },
  { id: 3, name: "Spanish" },
  { id: 4, name: "Mexican" },
  { id: 5, name: "French" },
];

export default function Home() {
  const router = useRouter();
  const [query, setQuery] = useState<string>("");
  const [selected, setSelected] = useState(cuisines[0]);
  const [duration, setDuration] = useState<string>('');
  const disabledButton = !query || !duration;

  const handleSearch = () => {
    if (!query) return;

    router.push(
        `/recipes?query=${encodeURIComponent(query)}&cuisine=${encodeURIComponent(selected.name)}&duration=${encodeURIComponent(duration)}`
    );
  };

  return (
      <div
          className="h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-900 to-black text-white">
        <h1 className="text-4xl font-extrabold text-white mb-8 text-center">
          🍽 Recipe Finder
        </h1>
        <div className="bg-gray-800 shadow-lg rounded-xl p-6 w-full max-w-3xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                🍲 Name of the dish
              </label>
              <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for a recipe..."
                  className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                🌍 Cuisine
              </label>
              <Dropdown
                  list={cuisines}
                  selected={selected}
                  setSelected={setSelected}
                  className="w-full"
              />
            </div>
            <div>
              <label className="block text-gray-300 font-medium mb-2">
                ⏳ Max preparation time (min)
              </label>
              <input
                  type="number"
                  min="10"
                  max="90"
                  value={duration}
                  onChange={(event) => setDuration(event.target.value)}
                  className="w-full p-3 border border-gray-600 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="mt-50 flex justify-center">
            <button
                onClick={handleSearch}
                disabled={disabledButton}
                className="bg-blue-600 hover:bg-blue-500 transition-all text-white font-bold py-3 px-8 rounded-lg shadow-lg disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              🔎 Search
            </button>
          </div>
        </div>
      </div>
  );
}

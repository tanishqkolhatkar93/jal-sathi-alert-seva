
import React, { useState } from "react";

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिन्दी" },
  // Add more languages here
];

// Dummy lang change, only demo
const LanguageSwitcher: React.FC = () => {
  const [lang, setLang] = useState("en");
  return (
    <div className="flex items-center gap-1">
      <span className="text-gray-500 text-sm">🌐</span>
      <select
        value={lang}
        onChange={e => setLang(e.target.value)}
        className="border border-gray-300 rounded px-2 py-1 text-sm min-w-[90px] focus:outline-none bg-white"
        aria-label="Select Language"
      >
        {LANGUAGES.map(l => (
          <option key={l.code} value={l.code}>{l.label}</option>
        ))}
      </select>
    </div>
  );
};
export default LanguageSwitcher;

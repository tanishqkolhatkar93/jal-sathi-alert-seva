
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import IVRCard from "@/components/IVRCard";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const VILLAGES = [
  { name_en: "Rampur", name_hi: "रामपुर" },
  { name_en: "Kalpana Nagar", name_hi: "कल्पना नगर" },
  { name_en: "Asha Kheda", name_hi: "आशा खेड़ा" },
  { name_en: "Saraswati Puram", name_hi: "सरस्वती पुरम" },
];

const DEMO_ALERT = {
  time: "Today, 5:30 PM",
  quality: "Safe to Drink (No Boil Needed)",
  statusColor: "green",
  note: "Latest test, डॉक्टर रिपोर्ट: पानी सुरक्षित है।",
};

const Alerts: React.FC = () => {
  const [mobile, setMobile] = useState("");
  const [village, setVillage] = useState(VILLAGES[0].name_en);
  const [showInfo, setShowInfo] = useState(false);

  // placeholder language selection
  const [lang] = useState("en");
  const navigate = useNavigate();

  // Only dummy, no backend yet
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setShowInfo(true);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-teal-200 flex flex-col items-center px-2 py-6">
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-blue-900">Water Alert Service</h2>
          <LanguageSwitcher />
        </div>
        <form className="grid gap-4 mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Village / गाँव चुनें
            </label>
            <select
              value={village}
              onChange={e => setVillage(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2 text-base focus:ring-2 ring-teal-400 transition"
            >
              {VILLAGES.map((v, i) => (
                <option key={i} value={lang === "en" ? v.name_en : v.name_hi}>
                  {lang === "en" ? v.name_en : v.name_hi}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Mobile Number / मोबाइल नंबर
            </label>
            <input
              required
              type="tel"
              pattern="[0-9]{10}"
              inputMode="numeric"
              className="w-full border border-gray-300 rounded px-3 py-2 text-base focus:ring-2 ring-teal-400 transition"
              placeholder="e.g. 9876543210"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold transition-colors shadow active:scale-95"
          >
            Show Latest Water Update
          </button>
        </form>

        {showInfo && (
          <div className="mt-8 border-t pt-6">
            <div className="mb-2 flex items-center gap-2">
              <span className={`inline-block w-3 h-3 rounded-full bg-${DEMO_ALERT.statusColor}-500`}></span>
              <span className="text-teal-700 font-bold">{village}</span>
            </div>
            <div className="mb-2 text-gray-700 text-lg">
              <span className="font-semibold">Next Water Supply: </span>
              {DEMO_ALERT.time}
            </div>
            <div className="mb-2 text-gray-700">
              <span className="font-semibold">Quality:</span>{" "}
              <span className={`text-green-700 font-semibold`}>{DEMO_ALERT.quality}</span>
            </div>
            <div className="mb-2 text-sm text-gray-600 italic">{DEMO_ALERT.note}</div>
            <div className="flex flex-col md:flex-row gap-2 mt-3">
              <button className="bg-green-600 hover:bg-green-700 text-white rounded px-4 py-2 font-medium transition-colors">
                Subscribe via WhatsApp
              </button>
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded px-4 py-2 font-medium transition-colors">
                Subscribe via SMS
              </button>
              <button className="bg-orange-500 hover:bg-orange-600 text-white rounded px-4 py-2 font-medium transition-colors">
                IVR Helpline
              </button>
            </div>
          </div>
        )}

        <div className="mt-10">
          <IVRCard />
        </div>
        <button
          onClick={() => navigate("/")}
          className="mt-6 w-full py-2 rounded-lg border border-teal-400 text-teal-800 font-medium transition hover:bg-teal-100"
        >
          ⬅️ Back / वापस जाएं
        </button>
      </div>
    </div>
  );
};

export default Alerts;

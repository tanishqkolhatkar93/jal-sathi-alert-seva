
import React, { useState } from "react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useNavigate } from "react-router-dom";

type Village = {
  id: number;
  name_en: string;
  name_hi: string;
  nextSupply: string;
  quality: string;
  alert: string;
};

const DEFAULT_VILLAGES: Village[] = [
  {
    id: 1,
    name_en: "Rampur",
    name_hi: "रामपुर",
    nextSupply: "Today, 4:30 PM",
    quality: "Safe (Boil not needed)",
    alert: "",
  },
  {
    id: 2,
    name_en: "Kalpana Nagar",
    name_hi: "कल्पना नगर",
    nextSupply: "Tomorrow, 7:30 AM",
    quality: "Boil before use",
    alert: "High TDS, please boil.",
  },
  {
    id: 3,
    name_en: "Asha Kheda",
    name_hi: "आशा खेड़ा",
    nextSupply: "Today, 6:00 PM",
    quality: "Safe (Boil not needed)",
    alert: "",
  },
];

const AdminDashboard: React.FC = () => {
  const [villages, setVillages] = useState<Village[]>(DEFAULT_VILLAGES);
  const [editId, setEditId] = useState<number | null>(null);
  const [form, setForm] = useState<Partial<Village>>({});
  const [lang] = useState("en");
  const navigate = useNavigate();

  function handleEdit(village: Village) {
    setEditId(village.id);
    setForm(village);
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSave() {
    if (!editId) return;
    setVillages(villages =>
      villages.map(v => (v.id === editId ? { ...v, ...form } as Village : v))
    );
    setEditId(null);
    setForm({});
  }
  function handleCancel() {
    setEditId(null);
    setForm({});
  }
  function handleSendAlert(id: number) {
    alert("Demo: Residents of this village would receive updated SMS/WhatsApp/IVR alerts.");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-teal-100 py-8 px-1 flex flex-col items-center">
      <div className="w-full max-w-3xl bg-white rounded-xl shadow-lg py-8 px-3 md:px-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-blue-900">JalSaathi Admin Dashboard</h2>
          <LanguageSwitcher />
        </div>
        <p className="mb-6 text-gray-700">
          Manage village water supply, update safety status, and notify residents in real time.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded shadow text-base">
            <thead>
              <tr className="bg-teal-100">
                <th className="px-3 py-2 border-b text-left">Village</th>
                <th className="px-3 py-2 border-b">Next Supply</th>
                <th className="px-3 py-2 border-b">Quality</th>
                <th className="px-3 py-2 border-b">Alert</th>
                <th className="px-3 py-2 border-b text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {villages.map(v => (
                <tr key={v.id} className="border-b hover:bg-teal-50">
                  <td className="px-3 py-2 font-semibold">
                    {lang === "en" ? v.name_en : v.name_hi}
                  </td>
                  <td className="px-3 py-2">
                    {editId === v.id ? (
                      <input
                        name="nextSupply"
                        value={form.nextSupply || ""}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      />
                    ) : (
                      v.nextSupply
                    )}
                  </td>
                  <td className="px-3 py-2">
                    {editId === v.id ? (
                      <select
                        name="quality"
                        value={form.quality || ""}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      >
                        <option value="Safe (Boil not needed)">Safe (Boil not needed)</option>
                        <option value="Boil before use">Boil before use</option>
                      </select>
                    ) : (
                      <span className={v.quality.includes("Boil") ? "text-red-600" : "text-green-700"}>
                        {v.quality}
                      </span>
                    )}
                  </td>
                  <td className="px-3 py-2">
                    {editId === v.id ? (
                      <input
                        name="alert"
                        value={form.alert || ""}
                        onChange={handleChange}
                        className="w-full border border-gray-300 rounded px-2 py-1"
                      />
                    ) : (
                      <span className="text-sm">{v.alert}</span>
                    )}
                  </td>
                  <td className="px-3 py-2 text-center">
                    {editId === v.id ? (
                      <div className="flex flex-col gap-1 md:flex-row md:gap-2">
                        <button
                          className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1 rounded"
                          onClick={handleSave}
                        >
                          Save
                        </button>
                        <button
                          className="bg-gray-300 hover:bg-gray-400 text-gray-900 px-2 py-1 rounded"
                          onClick={handleCancel}
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1 md:flex-row md:gap-2">
                        <button
                          className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                          onClick={() => handleEdit(v)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded"
                          onClick={() => handleSendAlert(v.id)}
                        >
                          Send Alert
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          onClick={() => navigate("/")}
          className="mt-8 w-full py-2 rounded-lg border border-teal-400 text-teal-800 font-medium transition hover:bg-teal-100"
        >
          ⬅️ Back to Home
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;

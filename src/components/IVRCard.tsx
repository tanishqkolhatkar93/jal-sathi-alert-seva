
import React from "react";

const IVRCard: React.FC = () => (
  <div className="bg-blue-50 border border-blue-300 rounded-xl p-4 flex flex-col md:flex-row items-center gap-4 shadow">
    <div className="flex-1">
      <h3 className="text-lg font-bold text-blue-900 mb-1">IVR Daily Voice Helpline</h3>
      <p className="text-gray-700 mb-1">Call <span className="font-mono font-bold text-blue-800">1800-123-4567</span> anytime for water timings &amp; alerts.</p>
      <small className="text-gray-500">Free from all India, Hindi/English available.</small>
    </div>
    <a
      href="tel:18001234567"
      className="inline-block px-6 py-2 bg-teal-600 text-white rounded-lg font-semibold shadow hover:bg-teal-700 transition"
    >
      📞 Call Now
    </a>
  </div>
);

export default IVRCard;

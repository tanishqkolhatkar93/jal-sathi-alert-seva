
import { useNavigate } from "react-router-dom";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import IVRCard from "@/components/IVRCard";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-teal-100 flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900">
            JalSaathi
          </h1>
          <LanguageSwitcher />
        </div>
        <p className="text-lg text-gray-700 mt-2 mb-4 leading-relaxed">
          Empowering Indian villages to access <span className="font-semibold text-teal-700">real-time water updates</span>—be the first to know water timings, quality info, and safety alerts in your area.
        </p>
        <div className="flex flex-col gap-4 mt-6">
          <button
            className="w-full py-3 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-lg font-semibold transition-colors shadow-md"
            onClick={() => navigate("/alerts")}
          >
            Get Water Updates
          </button>
          <button
            className="w-full py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-lg font-semibold transition-colors shadow-md"
            onClick={() => navigate("/admin")}
          >
            For Officials / NGOs
          </button>
        </div>
        <div className="my-8">
          <IVRCard />
        </div>
        <footer className="pt-4 border-t mt-4 text-center text-sm text-gray-500">
          <div>
            <span>Want to collaborate? NGOs and Jal Board officers: </span>
            <a
              href="mailto:jalsaathi-team@email.com"
              className="text-orange-600 underline hover:text-orange-800"
            >
              Contact us!
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;

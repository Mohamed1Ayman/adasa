import { FaHome, FaCompass } from "react-icons/fa";
import { Link } from "react-router";

function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute w-96 h-96 bg-amber-700/10 rounded-full blur-3xl -top-20 -left-20"></div>

      <div className="absolute w-96 h-96 bg-amber-700/10 rounded-full blur-3xl -bottom-20 -right-20"></div>

      <div className="relative z-10 text-center max-w-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-md">
            <FaCompass className="text-4xl text-amber-700" />
          </div>
        </div>

        <h1 className="text-[120px] md:text-[180px] font-black leading-none tracking-tight bg-[#FE5C00] text-transparent bg-clip-text">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          الصفحة غير موجودة
        </h2>

        <p className="text-slate-400 text-lg mt-4 leading-8">
          يبدو أنك وصلت إلى مكان غير موجود
          <br />
          ربما تم حذف الصفحة أو أن الرابط غير صحيح
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            to="/"
            className="flex items-center justify-center gap-3 px-7 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 transition-all duration-300 font-semibold shadow-lg shadow-amber-600/20"
          >
            <FaHome />
            العودة للرئيسية
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-7 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 font-semibold"
          >
            العودة للصفحة السابقة
          </button>
        </div>

        <p className="text-slate-600 text-sm mt-10">Error Code: 404</p>
      </div>
    </div>
  );
}

export default NotFound;

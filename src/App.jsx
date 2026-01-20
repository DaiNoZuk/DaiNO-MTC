import "./App.css";

const cards = [
  {
    title: "ภาพผู้บังคับบัญชาในอดีต",
    url: "https://drive.google.com/drive/folders/1fd4OOw8U373ryF9sugXzIsiR7k_yHYaQ?usp=sharing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmgkix4DEJoToCFKP-g8ztCYa9bIuxAC3pA&s",
  },
  {
    title: "ภาพงานสถาปนา",
    url: "https://drive.google.com/drive/folders/1sqrTxyIRSfjuKOYDXe7N9iJ-rKphAcXR?usp=sharing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmgkix4DEJoToCFKP-g8ztCYa9bIuxAC3pA&s",
  },
  {
    title: "ถ่ายทอดสดงานสถาปนา",
    url: "https://www.youtube.com/",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmgkix4DEJoToCFKP-g8ztCYa9bIuxAC3pA&s",
  },
  {
    title: "AI สำหรับงานสถาปนา",
    url: "https://gemini.google.com/gem/1cv8OIDrMiFX4cr2-a9k2O_qpySmJMKih?usp=sharing",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmgkix4DEJoToCFKP-g8ztCYa9bIuxAC3pA&s",
  },
];

function openLink(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function App() {
  return (
    <div className="min-h-screen w-full from-slate-50 to-slate-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900">
            สถาปนา ศทท.สส.ทหาร ปีที่ 36
          </h1>
        </div>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-4">
          {cards.map((c) => (
            <button
              key={c.title}
              onClick={() => openLink(c.url)}
              className="group w-full overflow-hidden rounded-2xl border border-slate-200 bg-white text-left shadow-sm transition
                         hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              <div className="relative">
                <img
                  src={c.img}
                  alt={c.title}
                  className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
              </div>

              <div className="p-4">
                <p className="text-base font-semibold text-slate-900 line-clamp-2">
                  {c.title}
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  คลิกเพื่อเปิดลิงก์
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

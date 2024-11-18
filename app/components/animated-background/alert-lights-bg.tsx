export function AlertLightsBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(40deg,#030712,#0A192F,#030712)] animate-gradient-xy"></div>
      <div className="absolute inset-0 opacity-15">
        <div className="absolute w-[40rem] h-[40rem] -top-40 -left-40 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute w-[40rem] h-[40rem] -bottom-40 -right-40 bg-indigo-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
    </div>
  );
}

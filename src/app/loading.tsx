export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950 text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-stone-800 border-t-[#c9a96e] rounded-full animate-spin" />
        <span className="text-xs uppercase tracking-[0.3em] text-[#c9a96e] font-light">
          Preparing Horizon...
        </span>
      </div>
    </div>
  );
}

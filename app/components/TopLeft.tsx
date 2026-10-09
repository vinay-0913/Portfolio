"use client";

import { useRouter, usePathname } from "next/navigation";

export default function TopLeft() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <button
      onClick={() => {
        if (pathname !== "/") {
          router.push("/");
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }}
      className="fixed top-4 left-6 hidden md:flex items-center gap-2.5 z-50 cursor-pointer group"
    >
      <span className="w-9 h-9 rounded-lg bg-zinc-900 text-white flex items-center justify-center text-sm font-bold tracking-tight">
        VR
      </span>
      <div className="flex flex-col -gap-0.5">
        <span className="text-sm font-semibold text-zinc-900 leading-tight group-hover:text-zinc-700 transition-colors">
          Vinay Ratnakar
        </span>
        <span className="text-[11px] text-zinc-400 leading-tight">
          Creative Developer
        </span>
      </div>
    </button>
  );
}
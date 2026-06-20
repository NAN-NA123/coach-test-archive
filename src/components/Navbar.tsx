"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAllVersions } from "@/lib/data";

export function Navbar() {
  const versions = getAllVersions();
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 bg-[#1a365d] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg tracking-tight whitespace-nowrap">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.5" />
              <path d="M6 7h8M6 10h8M6 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            教练系统测试档案
          </Link>
          <div className="flex items-center gap-1 overflow-x-auto">
            {versions.map((v) => {
              const isActive =
                pathname === `/version/${v.id}`;
              return (
                <Link
                  key={v.id}
                  href={`/version/${v.id}`}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {v.name}
                </Link>
              );
            })}
            <Link
              href="/qa"
              className={`px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                pathname === "/qa"
                  ? "bg-white/20 text-white"
                  : "text-white/70 hover:text-white hover:bg-white/10"
              }`}
            >
              测试问答
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

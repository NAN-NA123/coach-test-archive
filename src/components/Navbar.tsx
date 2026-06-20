"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getAllVersions } from "@/lib/data";

export function Navbar() {
  const versions = getAllVersions();
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isVersionActive = pathname.startsWith("/version/") || pathname === "/qa" || pathname === "/test-archive";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { href: "/philosophy", label: "产品理念" },
    { href: "/decisions", label: "决策日志" },
    { href: "/failures", label: "失败案例库" },
    { href: "/roadmap", label: "产品线路图" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0d1424]/95 backdrop-blur-md border-b border-[#2a3a5c]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="flex items-center gap-2.5 font-bold text-lg tracking-tight whitespace-nowrap text-white">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="3" width="18" height="18" rx="4" stroke="#4a9eff" strokeWidth="1.5" />
              <path d="M8 9h8M8 12h8M8 15h5" stroke="#4a9eff" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>Coach教练</span>
          </Link>
          <div className="flex items-center gap-1 overflow-x-auto">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-[#4a9eff]/20 text-[#4a9eff]"
                      : "text-[#6b8ab5] hover:text-white hover:bg-[#1a2744]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* 测试档案下拉菜单 */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1 ${
                  isVersionActive
                    ? "bg-[#4a9eff]/20 text-[#4a9eff]"
                    : "text-[#6b8ab5] hover:text-white hover:bg-[#1a2744]"
                }`}
              >
                测试档案
                <svg
                  className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-[#141d33] rounded-xl border border-[#2a3a5c] shadow-2xl py-2 z-50 max-h-[70vh] overflow-y-auto">
                  <Link
                    href="/test-archive"
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm font-medium transition-colors ${
                      pathname === "/test-archive"
                        ? "bg-[#4a9eff]/15 text-[#4a9eff]"
                        : "text-[#8ba3c7] hover:text-white hover:bg-[#1a2744]"
                    }`}
                  >
                    测试档案总览
                  </Link>
                  <div className="border-t border-[#2a3a5c] my-1" />
                  <div className="px-4 py-1.5 text-xs font-semibold text-[#4a5e80] uppercase tracking-wider">
                    版本
                  </div>
                  {versions.map((v) => (
                    <Link
                      key={v.id}
                      href={`/version/${v.id}`}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        pathname === `/version/${v.id}`
                          ? "bg-[#4a9eff]/15 text-[#4a9eff] font-medium"
                          : "text-[#8ba3c7] hover:text-white hover:bg-[#1a2744]"
                      }`}
                    >
                      <span className="font-medium">{v.name}</span>
                      {v.totalScore !== null && (
                        <span className="ml-2 text-xs text-[#4a5e80]">{v.totalScore}分</span>
                      )}
                    </Link>
                  ))}
                  <div className="border-t border-[#2a3a5c] my-1" />
                  <Link
                    href="/qa"
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-4 py-2 text-sm transition-colors ${
                      pathname === "/qa"
                        ? "bg-[#4a9eff]/15 text-[#4a9eff] font-medium"
                        : "text-[#8ba3c7] hover:text-white hover:bg-[#1a2744]"
                    }`}
                  >
                    测试问答
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

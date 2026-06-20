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

  const isVersionActive = pathname.startsWith("/version/") || pathname === "/qa";

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
    { href: "/failures", label: "失败案例库" },
    { href: "/roadmap", label: "产品线路图" },
  ];

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
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "text-white/70 hover:text-white hover:bg-white/10"
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
                className={`px-3 py-1.5 rounded-md text-sm font-medium whitespace-nowrap transition-colors flex items-center gap-1 ${
                  isVersionActive
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:text-white hover:bg-white/10"
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
                <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 max-h-[70vh] overflow-y-auto">
                  <div className="px-3 py-1.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    版本
                  </div>
                  {versions.map((v) => (
                    <Link
                      key={v.id}
                      href={`/version/${v.id}`}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-3 py-1.5 text-sm transition-colors ${
                        pathname === `/version/${v.id}`
                          ? "bg-[#1a365d]/10 text-[#1a365d] font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      <span className="font-medium">{v.name}</span>
                      {v.totalScore !== null && (
                        <span className="ml-2 text-xs text-gray-400">{v.totalScore}分</span>
                      )}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 my-1" />
                  <Link
                    href="/qa"
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-3 py-1.5 text-sm transition-colors ${
                      pathname === "/qa"
                        ? "bg-[#1a365d]/10 text-[#1a365d] font-medium"
                        : "text-gray-700 hover:bg-gray-50"
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

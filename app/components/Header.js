"use client";

import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
import { FiSearch, FiBell } from "react-icons/fi";

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="flex items-center gap-4 relative">
        {/* SEARCH */}
        <div className="flex items-center bg-white px-3 py-1 rounded-md">
          <input
            placeholder="Search..."
            className="outline-none text-sm"
          />
          <FiSearch className="ml-2 text-gray-500" />
        </div>

        {/* BELL */}
        <FiBell size={20} />

        {/* PROFILE */}
        <div className="relative">
          <img
            src={session?.user?.image || "https://i.pravatar.cc/40"}
            alt="profile"
            className="w-8 h-8 rounded-full cursor-pointer"
            onClick={() => setOpen(!open)}
          />

          {/* DROPDOWN */}
          {open && (
            <div className="absolute right-0 mt-2 bg-white shadow rounded p-2">
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="text-sm"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}